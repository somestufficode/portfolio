import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import World from './components/World';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <World />
  </React.StrictMode>,
  document.getElementById('root')
);

// const createRootPromise = import('react-dom').then(({ createRoot }) => createRoot(root));
// createRootPromise.render(rootElement);

reportWebVitals();
