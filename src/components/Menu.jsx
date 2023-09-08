import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Menu.module.css'; // Asegúrate de importar el archivo de estilos

function Menu() {
  return (
    <nav className={styles.menu}> {/* Añade la clase de estilos aquí */}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/tareas">Tareas</Link>
        </li>
        <li>
          <Link to="/sobre-nosotros">Sobre Nosotros</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
