import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar Bootstrap
import './index.css'; // Opcional: tu archivo CSS personalizado
import App from './App'; // Importar el componente principal


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);