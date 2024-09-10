import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Register from './components/Register'; // Ensure this path is correct
import About from './components/About';
import Main from './components/Main';

const App: React.FC = () => {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <footer>
        <p>&copy; 2024 Hackattack Hackathon Management Platform. All rights reserved.</p>
      </footer>
      </main>
    </>
  );
};

export default App;