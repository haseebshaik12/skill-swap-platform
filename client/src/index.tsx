import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App2  from './App2';
import App  from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <App2 />
  </React.StrictMode>
); 