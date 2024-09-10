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
              <li><a href="#hero" data-after="Home">Home</a></li>
              <li><a href="#about" data-after="About">About</a></li>
              <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSeo4IwCBIa8JRcKwJw-PVDnov0dV2XWOW8h6blhDwAHPEU4HQ/viewform?usp=sf_link" data-after="Register">Register</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;