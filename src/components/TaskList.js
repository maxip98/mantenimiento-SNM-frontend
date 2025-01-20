// Componente que muestra una lista de tareas. Utiliza el componente TaskItem para cada tarea en la lista y permite las acciones de eliminar, actualizar y completar tareas según el rol del usuario.

import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, deleteTask, updateTask, completeTask, userRole }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {tasks.map(task => (
        <TaskItem
          key={task._id}
          task={task}
          deleteTask={deleteTask}
          updateTask={updateTask}
          completeTask={completeTask}
          userRole={userRole}
        />
      ))}
    </div>
  );
};

export default TaskList;