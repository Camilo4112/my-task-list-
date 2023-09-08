import React, { useState } from 'react';
import styles from './task.module.css';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { TbTrash } from 'react-icons/tb';
import { FiEdit } from 'react-icons/fi';

export function Task({ task, onDelete, onComplete, onEditTaskTitle, onEditTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description || '');
  const [showDescription, setShowDescription] = useState(false);

  const handleStartEditing = () => {
    setIsEditing(true);
    setEditedTitle(task.title);
    setEditedDescription(task.description || '');
  };

  const handleSaveChanges = () => {
    onEditTask(task.id, editedTitle, editedDescription);
    setIsEditing(false);
  };

  const handleCancelEditing = () => {
    setIsEditing(false);
  };

  const handleToggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const handleEditTitleChange = (event) => {
    setEditedTitle(event.target.value);
  };

  const handleEditDescriptionChange = (event) => {
    setEditedDescription(event.target.value);
  };

  return (
    <div className={styles.task}>
      <button className={styles.checkContainer} onClick={() => onComplete(task.id)}>
        {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
      </button>

      {isEditing ? (
        <div className={styles.editInputContainer}>
          <input
            type="text"
            value={editedTitle}
            onChange={handleEditTitleChange}
            className={styles.editInput}
          />
          <textarea
            value={editedDescription}
            onChange={handleEditDescriptionChange}
            className={styles.editTextarea}
          />
          <div className={styles.editButtons}>
            <button className={styles.saveButton} onClick={handleSaveChanges}>
              Save
            </button>
            <button className={styles.cancelButton} onClick={handleCancelEditing}>
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.taskContent}>
          <p className={task.isCompleted ? styles.textCompleted : ''} onClick={handleToggleDescription}>
            {typeof task.title === 'string' ? task.title : 'Invalid Title'}
          </p>
          {showDescription && (task.description ? (
            <div className={styles.descriptionBox}>
              <p>{task.description}</p>
            </div>
          ) : (
            <p className={styles.descriptionMessage}>No descripción agregada</p>
          ))}
        </div>
      )}

      {!isEditing && (
        <button className={styles.editButton} onClick={handleStartEditing}>
          <FiEdit />
        </button>
      )}

      <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}



