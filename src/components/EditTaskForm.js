// EditTaskForm: Formulario para editar una tarea con campos para local, pedido, descripción y prioridad.

import React from 'react';

const EditTaskForm = ({ editTask, setEditTask, updateTask }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditTask({ ...editTask, [name]: value });
  };

  return (
    <div>
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">Local</label>
        <select
          name="local"
          value={editTask.local}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="Say No More">Say No More - Gral. Paz</option>
          <option value="Say wich">Say wich - Gral. Paz</option>
        </select>
      </div>
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">Pedido</label>
        <input
          type="text"
          name="pedido"
          value={editTask.pedido}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          placeholder="Pedido"
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">Descripción</label>
        <input
          type="text"
          name="descripcion"
          value={editTask.descripcion}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          placeholder="Descripción"
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">Prioridad</label>
        <select
          name="prioridad"
          value={editTask.prioridad}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="baja">Baja</option>
          <option value="media">Media</option>
          <option value="alta">Alta</option>
        </select>
      </div>
      <button
        onClick={() => updateTask(editTask)}
        className="mt-2 py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Guardar
      </button>
      <button
        onClick={() => setEditTask(null)}
        className="mt-2 ml-2 py-2 px-4 bg-gray-600 text-white font-semibold rounded-md shadow hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
      >
        Cancelar
      </button>
    </div>
  );
};

export default EditTaskForm;