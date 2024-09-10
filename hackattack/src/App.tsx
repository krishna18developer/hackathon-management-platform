import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import About from './components/About';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Projects />
      <About />
    </div>
  );
}

export default App;