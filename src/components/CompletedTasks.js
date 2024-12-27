import React from 'react';
import TaskFilters from './TaskFilters';
import TaskList from './TaskList';

const CompletedTasks = ({ tasks, filters, setFilters, showCompletedFilters, setShowCompletedFilters, deleteTask, updateTask, completeTask, userRole }) => {
  const applyFilters = () => {
    // Lógica de filtrado aquí
  };

  const clearFilters = () => {
    setFilters({
      local: '',
      prioridad: '',
      ordenarPor: 'fechaDesc'
    });
  };

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
            onClick={clearFilters}
            className="ml-2 py-1 px-3 bg-gray-600 text-white font-semibold rounded-md shadow hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Borrar Filtros
          </button>
        ) : null}
      </div>
      {showCompletedFilters && (
        <TaskFilters filters={filters} setFilters={setFilters} applyFilters={applyFilters} />
      )}
      <TaskList
        tasks={tasks.filter(task => task.completed)}
        deleteTask={deleteTask}
        updateTask={updateTask}
        completeTask={completeTask}
        userRole={userRole}
      />
    </div>
  );
};

export default CompletedTasks;