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