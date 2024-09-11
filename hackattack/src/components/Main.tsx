import React from 'react';
import Header from './Header';
import Services from './Services';
import About from './About';
import Hero from './Hero';
import Sponsors from './Sponsors';
import Contact from './Contact';

const Main: React.FC = () => {
  return (
    <>
        <Header />
        <Hero />
        <Services />
        <About />
        <Contact />
        <Sponsors />
        <footer>
        <p>&copy; 2024 Hackattack Hackathon Management Platform. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Main;