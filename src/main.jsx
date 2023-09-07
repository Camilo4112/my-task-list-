import React from 'react';
import { createRoot } from 'react-dom/client'; // Cambio en la importación

import App from './App';
import './styles/global.css';

const root = document.getElementById('root');
const reactRoot = createRoot(root); // Utiliza createRoot

reactRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
