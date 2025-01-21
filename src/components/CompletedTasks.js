// Componente que muestra las tareas completadas y permite aplicar filtros para buscar tareas específicas. 
// También permite borrar y actualizar tareas si el usuario tiene el rol de administrador.

import React from 'react';
import TaskFilters from './TaskFilters';
import TaskList from './TaskList';

const CompletedTasks = ({ tasks, filters, setFilters, showCompletedFilters, setShowCompletedFilters, deleteTask, updateTask, completeTask, userRole }) => {
  const applyFilters = () => {
    let filteredTasks = tasks.filter(task => task.completed);
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
    return filteredTasks;
  };

  const handleApplyFilters = () => {
    applyFilters();
    setShowCompletedFilters(false); // Esconder el acordeón de búsqueda
  };

  const handleClearFilters = () => {
    setFilters({ local: '', prioridad: '', ordenarPor: 'fechaDesc' });
    setShowCompletedFilters(false); // Esconder el acordeón de búsqueda
  };

  console.log('CompletedTasks received updateTask:', updateTask);

  return (
    <div>
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setShowCompletedFilters(!showCompletedFilters)}
          className="py-1 px-3 bg-green-600 text-white font-semibold rounded-md shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Filtrar Búsqueda
        </button>
        {filters.local || filters.prioridad ? (
          <button
            onClick={handleClearFilters}
            className="ml-2 py-1 px-3 bg-gray-600 text-white font-semibold rounded-md shadow hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Borrar Filtros
          </button>
        ) : null}
      </div>
      {showCompletedFilters && (
        <TaskFilters filters={filters} setFilters={setFilters} applyFilters={handleApplyFilters} />
      )}
      <TaskList
        tasks={applyFilters()}
        deleteTask={userRole === 'admin' ? deleteTask : null}
        updateTask={updateTask} // Asegúrate de pasar updateTask aquí
        completeTask={userRole === 'admin' ? completeTask : null}
        userRole={userRole}
      />
    </div>
  );
};

export default CompletedTasks;