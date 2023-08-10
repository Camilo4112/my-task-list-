import React from 'react';
import styles from './tasks.module.css';
import { Task } from '../Task';
import { BsFillCheckCircleFill } from 'react-icons/bs';

export function Tasks({ tasks, onDelete, onComplete, onEditTaskTitle, onEditTask }) {
  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter(task => task.isCompleted).length;

  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Created tasks</p>
          <span>{tasksQuantity}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed tasks</p>
          <span>{completedTasks} of {tasksQuantity}</span>
        </div>
      </header>

      <div className={styles.list}>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
            onComplete={onComplete}
            onEditTaskTitle={onEditTaskTitle}
            onEditTask={onEditTask} // Pasa el manejador de edición de tarea
          />
        ))}
      </div>
    </section>
  );
}

