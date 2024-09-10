import 'boxicons/css/boxicons.min.css';
import React from 'react';
import './hero.css';
import Image from 'next/image';
import heroimg from '../../public/imgs/heropageimg.png';

function Hero() {
  return (
    <div className="w-[95vw]">
      <header className="header">
        <a href="#" className="logo">logo</a>

        <nav className="navbar">
          <a href="#home" style={{ "--i": 1 }} className="active">Home</a>
          <a href="team.html" style={{ "--i": 2 }}>About</a>
          <a href="#" id="teamLink" style={{ "--i": 3 }}>Team</a>
          <a href="/register" style={{ "--i": 4 }}>Register</a>
          <a href="#" id="loginButton" style={{ "--i": 5 }}>Login</a>
        </nav>

        <div className="social-media text-white">
          <a href="#" style={{ "--i": 1 }} aria-label="Instagram"><i className='bx bxl-instagram'></i></a>
          <a href="#" style={{ "--i": 2 }} aria-label="Twitter"><i className='bx bxl-twitter'></i></a>
          <a href="#" style={{ "--i": 3 }} aria-label="WhatsApp"><i className='bx bxl-whatsapp'></i></a>
        </div>
      </header>

      <section className="home" id="home">
        <video autoPlay muted loop className="bg-video">
          <source src="./vid/bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="home-content">
          <h1>hackathon</h1>
          <h3>"Hack. Create. Innovate."</h3>
          <p>Unleash your creativity at our intense, 48-hour hackathon where tech enthusiasts, developers, and designers come together to build innovative software solutions. Collaborate, compete, and showcase your skills in a dynamic and fun environment. Whether you're a seasoned coder or just starting out, there's a place for you to make an impact and bring your ideas to life. Get ready for exciting challenges, networking opportunities, and awesome prizes!</p>
          <a href="/register" className="btn">Register</a>
        </div>

        <div className="home-img">
          <div className="rhombus">
            <Image src={heroimg} alt="Hero Image" />
          </div>
        </div>

        <div className="rhombus2"></div>
      </section>
    </div>
  );
}

export default Hero;