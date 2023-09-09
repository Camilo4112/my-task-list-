import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Menu.module.css'; // Asegúrate de importar el archivo de estilos
import LogoRemind from '../Assets/logoRemind.png'; // Ruta correcta hacia tu imagen

function Menu() {
  return (
    <nav className={styles.menu}> {/* Añade la clase de estilos aquí */}
      <div className={styles.logoContainer}> {/* Crea un contenedor para la imagen */}
        <img src={LogoRemind} alt="Logo Remind" className={styles.logo} />
      </div>
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
