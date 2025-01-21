import React from 'react';
import PendingTasks from './PendingTasks';
import CompletedTasks from './CompletedTasks';
import TaskForm from './TaskForm';
import EditTaskForm from './EditTaskForm';

const TaskListContainer = ({
  activeTab,
  tasks,
  filters,
  setFilters,
  showFilters,
  setShowFilters,
  showCompletedFilters,
  setShowCompletedFilters,
  deleteTask,
<<<<<<< HEAD
  updateTask, // Asegúrate de recibir updateTask aquí
=======
  updateTask,
>>>>>>> db72e820c8d8a2d3dd7293752809e17f3170c526
  completeTask,
  userRole,
  newTask,
  setNewTask,
  addTask,
  editTask,
  setEditTask
<<<<<<< HEAD
}) => {
  console.log('TaskListContainer received updateTask:', updateTask);

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      {activeTab === 'pending' && (
        <PendingTasks
          tasks={tasks}
          filters={filters}
          setFilters={setFilters}
          showFilters={showFilters}
          setShowFilters={setShowFilters}
          deleteTask={deleteTask}
          updateTask={updateTask} // Asegúrate de pasar updateTask aquí
          completeTask={completeTask}
          userRole={userRole}
        />
      )}
      {activeTab === 'newTask' && userRole === 'admin' && (
        <TaskForm newTask={newTask} setNewTask={setNewTask} addTask={addTask} />
      )}
      {activeTab === 'completed' && (
        <CompletedTasks
          tasks={tasks}
          filters={filters}
          setFilters={setFilters}
          showCompletedFilters={showCompletedFilters}
          setShowCompletedFilters={setShowCompletedFilters}
          deleteTask={deleteTask}
          updateTask={updateTask} // Asegúrate de pasar updateTask aquí
          completeTask={completeTask}
          userRole={userRole}
        />
      )}
      {editTask && userRole === 'admin' && (
        <EditTaskForm editTask={editTask} setEditTask={setEditTask} updateTask={updateTask} userRole={userRole} />
      )}
    </div>
  );
};
=======
}) => (
  <div className="bg-white p-4 rounded-lg shadow-lg">
    {activeTab === 'pending' && (
      <PendingTasks
        tasks={tasks}
        filters={filters}
        setFilters={setFilters}
        showFilters={showFilters}
        setShowFilters={setShowFilters}
        deleteTask={deleteTask}
        updateTask={updateTask}
        completeTask={completeTask}
        userRole={userRole}
      />
    )}
    {activeTab === 'newTask' && userRole === 'admin' && (
      <TaskForm newTask={newTask} setNewTask={setNewTask} addTask={addTask} />
    )}
    {activeTab === 'completed' && (
      <CompletedTasks
        tasks={tasks}
        filters={filters}
        setFilters={setFilters}
        showCompletedFilters={showCompletedFilters}
        setShowCompletedFilters={setShowCompletedFilters}
        deleteTask={deleteTask}
        updateTask={updateTask}
        completeTask={completeTask}
        userRole={userRole}
      />
    )}
    {editTask && userRole === 'admin' && (
      <EditTaskForm editTask={editTask} setEditTask={setEditTask} updateTask={updateTask} userRole={userRole} />
    )}
  </div>
);
>>>>>>> db72e820c8d8a2d3dd7293752809e17f3170c526

export default TaskListContainer;