import React from 'react';
import { FaEdit, FaTrash, FaCheck } from 'react-icons/fa';

const TaskActions = ({ task, handleEditClick, handleDeleteClick, handleCompleteClick, userRole }) => (
  <div className="flex justify-between">
    {!task.completed && userRole === 'admin' && (
      <>
        <button
          onClick={handleCompleteClick}
          className="py-1 px-2 bg-green-500 text-white rounded-md shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 flex items-center"
        >
          <FaCheck className="mr-1" /> Completar
        </button>
        <button
          onClick={handleEditClick}
          className="py-1 px-2 bg-yellow-500 text-white rounded-md shadow hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 flex items-center"
        >
          <FaEdit className="mr-1" /> Editar
        </button>
        <button
          onClick={handleDeleteClick}
          className="py-1 px-2 bg-red-500 text-white rounded-md shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 flex items-center"
        >
          <FaTrash className="mr-1" /> Eliminar
        </button>
      </>
    )}
  </div>
);

export default TaskActions;