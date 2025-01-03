import React from 'react';

const TaskFilters = ({ filters, setFilters, applyFilters }) => {
  return (
    <div className="mb-4 p-4 bg-gray-200 rounded-md shadow-inner">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Local</label>
        <select
          value={filters.local}
          onChange={(e) => setFilters({ ...filters, local: e.target.value })}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Todos</option>
          <option value="local1">Say No More</option>
          <option value="local2">Say Wich</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Prioridad</label>
        <select
          value={filters.prioridad}
          onChange={(e) => setFilters({ ...filters, prioridad: e.target.value })}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Todas</option>
          <option value="baja">Baja</option>
          <option value="media">Media</option>
          <option value="alta">Alta</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Ordenar por</label>
        <select
          value={filters.ordenarPor}
          onChange={(e) => setFilters({ ...filters, ordenarPor: e.target.value })}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="fechaDesc">Fecha (Últimas primero)</option>
          <option value="fechaAsc">Fecha (Primeras primero)</option>
          <option value="prioridad">Prioridad</option>
        </select>
      </div>
      <button
        onClick={applyFilters}
        className="py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Aplicar Filtros
      </button>
    </div>
  );
};

export default TaskFilters;