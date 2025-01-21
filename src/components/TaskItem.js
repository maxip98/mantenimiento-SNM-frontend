import React, { useState } from 'react';
<<<<<<< HEAD
import { FaEdit, FaTrash, FaSave, FaTimes, FaCheck } from 'react-icons/fa';
=======
import { FaSave, FaTimes } from 'react-icons/fa';
>>>>>>> db72e820c8d8a2d3dd7293752809e17f3170c526
import TaskDetails from './TaskDetails';
import TaskActions from './TaskActions';
import ConfirmationModal from './ConfirmationModal';

const TaskItem = ({ task, deleteTask, updateTask, completeTask, userRole }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingObservations, setIsEditingObservations] = useState(false);
  const [editedTask, setEditedTask] = useState({ ...task });
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isCompleteModalOpen, setIsCompleteModalOpen] = useState(false);

<<<<<<< HEAD
  console.log('TaskItem received updateTask:', updateTask);

=======
>>>>>>> db72e820c8d8a2d3dd7293752809e17f3170c526
  const handleEditClick = () => setIsEditing(true);
  const handleCancelClick = () => {
    setIsEditing(false);
    setEditedTask({ ...task });
  };
  const handleSaveClick = () => {
    updateTask(editedTask);
    setIsEditing(false);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTask({ ...editedTask, [name]: value });
  };
  const handleCompleteClick = () => setIsCompleteModalOpen(true);
  const handleDeleteClick = () => setIsDeleteModalOpen(true);
  const confirmCompleteTask = () => {
    completeTask(task._id);
    setIsCompleteModalOpen(false);
  };
  const confirmDeleteTask = () => {
    deleteTask(task._id);
    setIsDeleteModalOpen(false);
  };

  const handleEditObservationsClick = () => setIsEditingObservations(true);
  const handleSaveObservationsClick = () => {
    updateTask(editedTask);
    setIsEditingObservations(false);
  };
  const handleCancelObservationsClick = () => {
    setIsEditingObservations(false);
    setEditedTask({ ...task });
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 w-full sm:w-1/2 lg:w-1/3 mx-auto border-l-4 border-blue-500">
      {isEditing ? (
        <>
          <div className="mb-2">
            <strong>Local:</strong>
            <select name="local" value={editedTask.local} onChange={handleChange} className="ml-2 border rounded p-1">
              <option value="Say No More">Say No More</option>
              <option value="Say Wich">Say Wich</option>
            </select>
          </div>
          <div className="mb-2">
            <strong>Pedido:</strong>
            <input type="text" name="pedido" value={editedTask.pedido} onChange={handleChange} className="ml-2 border rounded p-1" />
          </div>
          <div className="mb-2">
            <strong>Descripción:</strong>
            <input type="text" name="descripcion" value={editedTask.descripcion} onChange={handleChange} className="ml-2 border rounded p-1" />
          </div>
          <div className="mb-2">
            <strong>Prioridad:</strong>
            <select name="prioridad" value={editedTask.prioridad} onChange={handleChange} className="ml-2 border rounded p-1">
              <option value="alta">Alta</option>
              <option value="media">Media</option>
              <option value="baja">Baja</option>
            </select>
          </div>
          <div className="mb-2">
            <strong>Tipo de mantenimiento:</strong>
            <select name="tipoMantenimiento" value={editedTask.tipoMantenimiento} onChange={handleChange} className="ml-2 border rounded p-1" disabled={userRole !== 'admin'}>
              <option value="equipo de frio">Equipo de frío</option>
              <option value="pequeño electrodomestico">Pequeño electrodoméstico</option>
              <option value="edilicio">Edilicio</option>
              <option value="mobiliario">Mobiliario</option>
              <option value="otro">Otro</option>
            </select>
          </div>
          <div className="mb-4">
            <strong>Fecha de carga:</strong> {new Date(task.fechaCarga).toLocaleDateString()}
          </div>
          <div className="flex justify-between">
            <button onClick={handleSaveClick} className="py-1 px-2 bg-green-500 text-white rounded-md shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 flex items-center">
              <FaSave className="mr-1" /> Guardar
            </button>
            <button onClick={handleCancelClick} className="py-1 px-2 bg-gray-500 text-white rounded-md shadow hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 flex items-center">
              <FaTimes className="mr-1" /> Cancelar
            </button>
          </div>
        </>
      ) : (
        <>
          <TaskDetails task={task} />
          <TaskActions task={task} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick} handleCompleteClick={handleCompleteClick} userRole={userRole} />
        </>
      )}
<<<<<<< HEAD
      <div className="mb-2">
        <strong>Observaciones:</strong>
        {userRole === 'viewer' ? (
          isEditingObservations ? (
            <>
              <textarea name="observaciones" value={editedTask.observaciones} onChange={handleChange} className="ml-2 border rounded p-1 w-full" />
              <div className="flex justify-between mt-2">
                <button onClick={handleSaveObservationsClick} className="py-1 px-2 bg-green-500 text-white rounded-md shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 flex items-center">
                  <FaSave className="mr-1" /> Guardar
                </button>
                <button onClick={handleCancelObservationsClick} className="py-1 px-2 bg-gray-500 text-white rounded-md shadow hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 flex items-center">
                  <FaTimes className="mr-1" /> Cancelar
                </button>
              </div>
            </>
          ) : (
            <>
              <p className="ml-2">{task.observaciones}</p>
              <button onClick={handleEditObservationsClick} className="py-1 px-2 bg-yellow-500 text-white rounded-md shadow hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 flex items-center mt-2">
                <FaEdit className="mr-1" /> Editar Observaciones
              </button>
            </>
          )
        ) : (
          <p className="ml-2">{task.observaciones}</p>
        )}
      </div>
=======
>>>>>>> db72e820c8d8a2d3dd7293752809e17f3170c526
      <ConfirmationModal isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)} onConfirm={confirmDeleteTask} title="Confirmar Eliminación" message="¿Estás seguro de que quieres eliminar esta tarea?" />
      <ConfirmationModal isOpen={isCompleteModalOpen} onClose={() => setIsCompleteModalOpen(false)} onConfirm={confirmCompleteTask} title="Confirmar Completado" message="¿Estás seguro de que quieres marcar esta tarea como completada?" />
    </div>
  );
};

export default TaskItem;