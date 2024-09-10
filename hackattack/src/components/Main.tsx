import React from 'react';
import Header from './Header';
import Services from './Services';
import About from './About';
import Hero from './Hero';

const Main: React.FC = () => {
  return (
    <>
        <Header />
        <Hero />
        <Services />
        <About />
    </>
  );
}

export default Main;