import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Tasks } from './components/Tasks';
import Home from './components/Home';
import Menu from './components/Menu';

import useTaskManager from './Hooks/miprimerhook';

import './styles/global.css';

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
    <Router>
      <Menu />
      <Routes>
        <Route
          path="/tareas"
          element={
            <Tasks
              tasks={tasks}
              onDelete={handleDeleteTask}
              onComplete={handleToggleTaskCompleted}
              onEditTask={handleEditTask}
            />
          }
        />
        <Route path="/sobre-nosotros" element={<div>Página Sobre Nosotros</div>} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
