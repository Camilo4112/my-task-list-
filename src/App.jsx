import React from 'react';
import { Header } from './components/Header/index';
import { Tasks } from './components/Tasks';
import useTaskManager from './Hooks/miprimerhook';

function App() {
  const { tasks, createTask, deleteTask, updateTask, editTask } = useTaskManager();

  const handleAddTask = ({ title, description }) => {
    createTask(title, description);
  };

  const handleDeleteTask = (taskId) => {
    deleteTask(taskId);
  };

  const handleToggleTaskCompleted = (taskId) => {
    const task = tasks.find((task) => task.id === taskId);
    if (task) {
      const updatedTask = {
        ...task,
        isCompleted: !task.isCompleted,
      };
      updateTask(taskId, updatedTask);
    }
  };

  const handleEditTask = (taskId, newTitle, newDescription) => {
    editTask(taskId, newTitle, newDescription);
  };

  return (
    <>
      <Header handleAddTask={handleAddTask} />
      <Tasks
        tasks={tasks}
        onDelete={handleDeleteTask}
        onComplete={handleToggleTaskCompleted}
        onEditTask={handleEditTask}
      />
    </>
  );
}

export default App;

