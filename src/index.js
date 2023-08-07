import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import World from './components/World';
import About from './components/AboutMe'; 
import Projects from './components/Projects';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<World />} />
        <Route path="/aboutme" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// const createRootPromise = import('react-dom').then(({ createRoot }) => createRoot(root));
// createRootPromise.render(rootElement);

reportWebVitals();
