import React from 'react';

const TaskDetails = ({ task }) => (
  <>
    <div className="mb-2"><strong>ID:</strong> {task._id}</div>
    <div className="mb-2"><strong>Local:</strong> {task.local}</div>
    <div className="mb-2"><strong>Pedido:</strong> {task.pedido}</div>
    <div className="mb-2"><strong>Descripción:</strong> {task.descripcion}</div>
    <div className="mb-2"><strong>Prioridad:</strong> {task.prioridad}</div>
    <div className="mb-2"><strong>Tipo de mantenimiento:</strong> {task.tipoMantenimiento}</div>
    <div className="mb-2"><strong>Pedido por:</strong> {task.pedidoPor}</div>
    <div className="mb-4"><strong>Fecha de carga:</strong> {new Date(task.fechaCarga).toLocaleDateString()}</div>
  </>
);

export default TaskDetails;