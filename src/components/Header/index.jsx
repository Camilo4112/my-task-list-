import React, { useState } from 'react';
import todoLogo from '../../assets/todoLogo.svg';
import styles from './header.module.css';
import { AiOutlinePlusCircle } from 'react-icons/ai';

export function Header({ handleAddTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (title.length < 3) {
      alert('El nombre de la tarea debe tener al menos 3 caracteres.');
      return;
    }

    handleAddTask({ title, description });
    setTitle('');
    setDescription('');
  };

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="Todo Logo" />

      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input
          type="text"
          placeholder="Nombre de la tarea"
          value={title}
          onChange={handleChangeTitle}
        />
        <input
          type='text'
          placeholder="Descripción de la tarea (opcional)"
          value={description}
          onChange={handleChangeDescription}
        />
        <button type="submit">Crear <AiOutlinePlusCircle size={20} /></button>
      </form>
    </header>
  );
}
