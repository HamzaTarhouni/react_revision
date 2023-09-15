// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import ReactDOM from 'react-dom';
import React from 'react';
import './style.css';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <>
    <App />
  </>);