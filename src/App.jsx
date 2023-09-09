import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './components/Home';
import Tasks from './components/Tasks';
import SobreNosotros from './components/SobreNosotros';
import useTaskManager from './Hooks/miprimerhook';
import { Header } from './components/Header';
import { ChakraProvider, CSSReset, Flex, IconButton } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import theme from './theme';

function App() {
  const { tasks, createTask, deleteTask, updateTask, editTask } = useTaskManager();
  const [isDarkMode, setIsDarkMode] = useState(false);

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

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
    document.documentElement.classList.toggle('chakra-ui-dark');
  };

  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Router>
        <Menu />
        <div style={{ position: "relative" }}>
          <Flex justify="flex-end" p={4} position="fixed" bottom="0" right="0" zIndex="1">
            <IconButton
              icon={isDarkMode ? <SunIcon /> : <MoonIcon />}
              onClick={toggleDarkMode}
              aria-label="Toggle Dark Mode"
              variant="ghost"
            />
          </Flex>
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
        </div>
        {isDarkMode && <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0,0,0,0.5)", zIndex: 0 }} />}
      </Router>
    </ChakraProvider>
  );
}

export default App;
