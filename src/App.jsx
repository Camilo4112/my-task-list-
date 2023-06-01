import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import useTaskManager from "./Hooks/miprimerhook";

function App() {
  const { tasks, createTask, deleteTask, updateTask } = useTaskManager();

  const handleAddTask = (taskTitle) => {
    createTask(taskTitle);
  };

  const handleDeleteTask = (taskId) => {
    deleteTask(taskId);
  };

  const handleToggleTaskCompleted = (taskId) => {
    const task = tasks.find((task) => task.id === taskId);
    if (task) {
      const updatedTask = {
        isCompleted: !task.isCompleted,
      };
      updateTask(taskId, updatedTask);
    }
  };

  return (
    <>
      <Header handleAddTask={handleAddTask} />
      <Tasks
        tasks={tasks}
        onDelete={handleDeleteTask}
        onComplete={handleToggleTaskCompleted}
      />
    </>
  );
}

export default App;
