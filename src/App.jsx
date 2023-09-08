import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './components/Home';
import Tasks from './components/Tasks';
import SobreNosotros from './components/SobreNosotros';
import useTaskManager from './Hooks/miprimerhook';
import { Header } from './components/Header'; // Asegúrate de importar Header

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
        <Route exact path="/" element={<Home />} />

        <Route
          path="/tareas"
          element={
            <>
              <Header handleAddTask={handleAddTask} />
              <Tasks
                tasks={tasks}
                onDelete={handleDeleteTask}
                onComplete={handleToggleTaskCompleted}
                onEditTask={handleEditTask}
              />
            </>
          }
        />

        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
      </Routes>
    </Router>
  );
}

export default App;
