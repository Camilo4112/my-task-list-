import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const useTaskManager = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = localStorage.getItem('todo:tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  const saveTasks = (newTasks) => {
    setTasks(newTasks);
    localStorage.setItem('todo:tasks', JSON.stringify(newTasks));
  };

  const createTask = (taskTitle, taskDescription) => {
    const newTask = {
      id: uuidv4(),
      title: taskTitle,
      description: taskDescription,
      isCompleted: false,
    };
    saveTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    saveTasks(updatedTasks);
  };

  const updateTask = (taskId, updatedTask) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          ...updatedTask,
        };
      }
      return task;
    });
    saveTasks(updatedTasks);
  };

  const editTask = (taskId, newTitle, newDescription) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          title: newTitle,
          description: newDescription,
        };
      }
      return task;
    });
    saveTasks(updatedTasks);
  };

  return { tasks, createTask, deleteTask, updateTask, editTask };
};

export default useTaskManager;
