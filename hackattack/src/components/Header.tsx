import React from 'react';

const Header: React.FC = () => {
  return (
    <section id="header">
      <div className="header container">
        <div className="nav-bar">
          <div className="brand">
            <a href="#"><img src="/logo.png" alt="Hack Attack Logo" /></a>
          </div>        
          <div className="nav-list">
            <div className="hamburger">
              <div className="bar"></div>
            </div>
            <ul>
              <li><a href="#" data-after="Home">Home</a></li>
              <li><a href="#about" data-after="About">About</a></li>
              <li><a href="/register" data-after="Register">Register</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;