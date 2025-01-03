// TaskForm: Formulario para agregar una nueva tarea con campos para local, pedido, descripción y prioridad.

import React from 'react';

const TaskForm = ({ newTask, setNewTask, addTask }) => {
  return (
    <div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Local</label>
        <select
          value={newTask.local}
          onChange={(e) => setNewTask({ ...newTask, local: e.target.value })}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="local1">Say No More - Gral. Paz</option>
          <option value="local2">Say wich - Gral. Paz</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Pedido</label>
        <input
          type="text"
          value={newTask.pedido}
          onChange={(e) => setNewTask({ ...newTask, pedido: e.target.value })}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          placeholder="Pedido"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Descripción</label>
        <input
          type="text"
          value={newTask.descripcion}
          onChange={(e) => setNewTask({ ...newTask, descripcion: e.target.value })}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          placeholder="Descripción"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Prioridad</label>
        <select
          value={newTask.prioridad}
          onChange={(e) => setNewTask({ ...newTask, prioridad: e.target.value })}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="baja">Baja</option>
          <option value="media">Media</option>
          <option value="alta">Alta</option>
        </select>
      </div>
      <button
        onClick={addTask}
        className="mt-4 py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Agregar
      </button>
    </div>
  );
};

export default TaskForm;