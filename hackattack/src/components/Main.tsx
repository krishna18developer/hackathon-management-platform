import React from 'react';
import Header from './Header';
import Services from './Services';
import About from './About';
import Hero from './Hero';
import Sponsors from './Sponsors';
import Contact from './Contact';

/*
        <About />
        <Contact />
        <Sponsors />
 */
const Main: React.FC = () => {
  return (
    <>
        <Header />
        <Hero />
        <Services />
        <Contact />

        <footer>
        <p>&copy; 2024 Hackathon Management Platform. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Main;