import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import EditTaskForm from './EditTaskForm';
import TaskFilters from './TaskFilters';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    local: 'local1',
    pedido: '',
    descripcion: '',
    prioridad: 'baja'
  });
  const [activeTab, setActiveTab] = useState('pending');
  const [editTask, setEditTask] = useState(null);
  const [filters, setFilters] = useState({
    local: '',
    prioridad: '',
    ordenarPor: 'fechaDesc'
  });
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      window.location.href = '/login';
    }
  }, []);

  const fetchTasks = async () => {
    const response = await axios.get('http://localhost:5000/api/tasks', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    setTasks(response.data);
  };

  const addTask = async () => {
    const response = await axios.post('http://localhost:5000/api/tasks', newTask, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    setTasks([response.data, ...tasks]); // Inserta la nueva tarea al principio
    setNewTask({
      local: 'local1',
      pedido: '',
      descripcion: '',
      prioridad: 'baja'
    });
    setActiveTab('pending');
  };

  const updateTask = async (updatedTask) => {
    const response = await axios.put(`http://localhost:5000/api/tasks/${updatedTask._id}`, updatedTask, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    setTasks(tasks.map(task => (task._id === updatedTask._id ? response.data : task)));
  };

  const deleteTask = async (id) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar esta tarea?')) {
      await axios.delete(`http://localhost:5000/api/tasks/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setTasks(tasks.filter(task => task._id !== id));
    }
  };

  const completeTask = async (id) => {
    await axios.put(`http://localhost:5000/api/tasks/${id}/complete`, {}, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    setTasks(tasks.map(task => (task._id === id ? { ...task, completed: true } : task)));
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  const applyFilters = () => {
    let filteredTasks = [...tasks];
    if (filters.local) {
      filteredTasks = filteredTasks.filter(task => task.local === filters.local);
    }
    if (filters.prioridad) {
      filteredTasks = filteredTasks.filter(task => task.prioridad === filters.prioridad);
    }
    if (filters.ordenarPor === 'prioridad') {
      filteredTasks.sort((a, b) => {
        const prioridadOrder = { alta: 1, media: 2, baja: 3 };
        return prioridadOrder[a.prioridad] - prioridadOrder[b.prioridad];
      });
    } else if (filters.ordenarPor === 'fechaAsc') {
      filteredTasks.sort((a, b) => new Date(a.fechaCarga) - new Date(b.fechaCarga));
    } else {
      filteredTasks.sort((a, b) => new Date(b.fechaCarga) - new Date(a.fechaCarga));
    }
    setTasks(filteredTasks);
    setShowFilters(false);
  };

  const clearFilters = () => {
    setFilters({
      local: '',
      prioridad: '',
      ordenarPor: 'fechaDesc'
    });
    fetchTasks();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-blue-600">Gestión de Tareas</h1>
        <button
          onClick={handleLogout}
          className="py-2 px-3 bg-red-600 text-white font-semibold rounded-md shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Cerrar Sesión
        </button>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <div className="flex justify-around mb-4">
          <button
            onClick={() => setActiveTab('pending')}
            className={`py-1 px-3 ${activeTab === 'pending' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'} font-semibold rounded-md shadow`}
          >
            Pendientes
          </button>
          <button
            onClick={() => setActiveTab('newTask')}
            className={`py-1 px-3 ${activeTab === 'newTask' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'} font-semibold rounded-md shadow`}
          >
            Agregar Nueva
          </button>
          <button
            onClick={() => setActiveTab('completed')}
            className={`py-1 px-3 ${activeTab === 'completed' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'} font-semibold rounded-md shadow`}
          >
            Terminadas
          </button>
        </div>
        {activeTab === 'pending' && (
          <div>
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="py-1 px-3 bg-green-600 text-white font-semibold rounded-md shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Filtrar Búsqueda
              </button>
              {filters.local || filters.prioridad ? (
                <button
                  onClick={clearFilters}
                  className="ml-2 py-1 px-3 bg-gray-600 text-white font-semibold rounded-md shadow hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  Borrar Filtros
                </button>
              ) : null}
            </div>
            {showFilters && (
              <TaskFilters filters={filters} setFilters={setFilters} applyFilters={applyFilters} />
            )}
            <TaskList tasks={tasks.filter(task => !task.completed)} deleteTask={deleteTask} updateTask={updateTask} completeTask={completeTask} />
          </div>
        )}
        {activeTab === 'newTask' && (
          <TaskForm newTask={newTask} setNewTask={setNewTask} addTask={addTask} />
        )}
        {activeTab === 'completed' && (
          <TaskList tasks={tasks.filter(task => task.completed)} deleteTask={deleteTask} updateTask={updateTask} completeTask={completeTask} />
        )}
        {editTask && (
          <EditTaskForm editTask={editTask} setEditTask={setEditTask} updateTask={updateTask} />
        )}
      </div>
    </div>
  );
};

export default TaskManager;