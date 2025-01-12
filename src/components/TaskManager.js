import React, { useState, useEffect } from 'react';
import api from '../services/api';
import NavBar from './NavBar';
import MenuTabs from './MenuTabs';
import PendingTasks from './PendingTasks';
import CompletedTasks from './CompletedTasks';
import TaskForm from './TaskForm';
import EditTaskForm from './EditTaskForm';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    local: 'Say No More',
    pedido: '',
    descripcion: '',
    prioridad: 'baja',
    tipoMantenimiento: 'equipo de frio' // Valor por defecto
  });
  const [activeTab, setActiveTab] = useState('pending');
  const [editTask, setEditTask] = useState(null);
  const [filters, setFilters] = useState({
    local: '',
    prioridad: '',
    ordenarPor: 'fechaDesc'
  });
  const [showFilters, setShowFilters] = useState(false);
  const [showCompletedFilters, setShowCompletedFilters] = useState(false);
  const [userRole, setUserRole] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      window.location.href = '/login';
    } else {
      fetchTasks();
      fetchUserDetails();
    }
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await api.get('/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Error al obtener tareas:', error);
    }
  };

  const fetchUserDetails = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      console.log(decodedToken); // Verifica que el token contiene el campo 'username'
      setUserRole(decodedToken.role);
      setUsername(decodedToken.username); // Asumiendo que el token contiene el nombre de usuario
    }
  };

  const addTask = async () => {
    try {
      const response = await api.post('/tasks', { ...newTask, pedidoPor: username }); // Agregar el campo "pedido por"
      setTasks([response.data, ...tasks]);
      setNewTask({
        local: 'Say No More',
        pedido: '',
        descripcion: '',
        prioridad: 'baja',
        tipoMantenimiento: 'equipo de frio' // Valor por defecto
      });
      setActiveTab('pending');
    } catch (error) {
      console.error('Error al añadir tarea:', error);
    }
  };

  const updateTask = async (updatedTask) => {
    try {
      const response = await api.put(`/tasks/${updatedTask._id}`, updatedTask);
      setTasks(tasks.map(task => (task._id === updatedTask._id ? response.data : task)));
    } catch (error) {
      console.error('Error al actualizar tarea:', error);
    }
  };

  const deleteTask = async (id) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar esta tarea?')) {
      try {
        await api.delete(`/tasks/${id}`);
        setTasks(tasks.filter(task => task._id !== id));
      } catch (error) {
        console.error('Error al eliminar tarea:', error);
      }
    }
  };

  const completeTask = async (id) => {
    try {
      await api.put(`/tasks/${id}/complete`);
      setTasks(tasks.map(task => (task._id === id ? { ...task, completed: true } : task)));
    } catch (error) {
      console.error('Error al completar tarea:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <NavBar handleLogout={handleLogout} username={username} />
      <MenuTabs setActiveTab={setActiveTab} activeTab={activeTab} userRole={userRole} />
      <div className="bg-white p-4 rounded-lg shadow-lg">
        {activeTab === 'pending' && (
          <PendingTasks
            tasks={tasks}
            filters={filters}
            setFilters={setFilters}
            showFilters={showFilters}
            setShowFilters={setShowFilters}
            deleteTask={deleteTask}
            updateTask={updateTask}
            completeTask={completeTask}
            userRole={userRole}
          />
        )}
        {activeTab === 'newTask' && userRole === 'admin' && (
          <TaskForm newTask={newTask} setNewTask={setNewTask} addTask={addTask} />
        )}
        {activeTab === 'completed' && (
          <CompletedTasks
            tasks={tasks}
            filters={filters}
            setFilters={setFilters}
            showCompletedFilters={showCompletedFilters}
            setShowCompletedFilters={setShowCompletedFilters}
            deleteTask={deleteTask}
            updateTask={updateTask}
            completeTask={completeTask}
            userRole={userRole}
          />
        )}
        {editTask && userRole === 'admin' && (
          <EditTaskForm editTask={editTask} setEditTask={setEditTask} updateTask={updateTask} userRole={userRole} />
        )}
      </div>
    </div>
  );
};

export default TaskManager;