import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, deleteTask, updateTask, completeTask }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {tasks.map(task => (
        <TaskItem
          key={task._id}
          task={task}
          deleteTask={deleteTask}
          updateTask={updateTask}
          completeTask={completeTask}
        />
      ))}
    </div>
  );
};

export default TaskList;