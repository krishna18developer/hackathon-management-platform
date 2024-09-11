import React from 'react';
import './../styles/header.css';
//<a href="#"><img src="/hackattack-logo.jpg" alt="Hack Attack Logo" /></a>

const Header: React.FC = () => {
  return (
    <section id="header">
      <div className="header container">
        <div className="nav-bar">
          <div className="brand-n">
            <h1 className='hackattack-header-title'>HackAttack</h1>
          </div>        
          <div className="nav-list">
            <div className="hamburger">
              <div className="bar"></div>
            </div>
            <ul>
              <li><a href="#" data-after="Home">Home</a></li>
              <li><a href="#about" data-after="About">About</a></li>
              <li><a href="/register" data-after="Register">Register</a></li>
              <li><a href="#contact" data-after="Contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;