import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Dein Stylesheet
import 'bootstrap/dist/css/bootstrap.min.css'; // Importiere Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.js'
import '@coreui/coreui/dist/css/coreui.min.css';


ReactDOM.render(
  <React.StrictMode>
    <App />  {/* Render die App-Komponente */}
  </React.StrictMode>,
  document.getElementById('root')
);
