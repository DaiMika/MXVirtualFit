import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

/**
 * Entry point of the React application.
 * Renders the App component into the root DOM element.
 */
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
