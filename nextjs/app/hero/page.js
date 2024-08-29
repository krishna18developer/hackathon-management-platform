'use client';
import React, { useState, useEffect } from 'react';
import './hero.css';
import 'boxicons/css/boxicons.min.css';
// import heroimg from '../../public/imgs/heropageimg.png'
import heroimg from '../../public/imgs/heropageimg.png'
import Image from 'next/image';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const eventDate = new Date('December 1, 2024 00:00:00').getTime();
      const currentTime = new Date().getTime();
      const difference = eventDate - currentTime;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <header className="header">
        <a href="#" className="logo">logo</a>

        <nav className="navbar">
          <a href="#" style={{ '--i': 1 }} className="active">Home</a>
          <a href="#" style={{ '--i': 2 }}>About</a>
          <a href="#" style={{ '--i': 3 }}>Contact</a>
          <a href="#" style={{ '--i': 4 }}>Register</a>
        </nav>

        <div className="social-media">
          <a href="#" style={{ '--i': 1 }}><i className='bx bxl-instagram'></i></a>
          <a href="#" style={{ '--i': 2 }}><i className='bx bxl-twitter'></i></a>
          <a href="#" style={{ '--i': 3 }}><i className='bx bxl-whatsapp'></i></a>
        </div>
      </header>

      <section className="home">
        <div className="home-content">
          <h1>hackathon</h1>
          <h3>"Hack. Create. Innovate."</h3>
          <p>
            Unleash your creativity at our intense, 48-hour hackathon where tech enthusiasts, developers, and designers come together to build innovative software solutions. Collaborate, compete, and showcase your skills in a dynamic and fun environment. Whether you're a seasoned coder or just starting out, there's a place for you to make an impact and bring your ideas to life. Get ready for exciting challenges, networking opportunities, and awesome prizes!
          </p>
          <a href="#" className="btn">Register</a>

          {/* Countdown Timer */}
          <div className="countdown">
            <h4>Time left until December 1:</h4>
            <div>{timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</div>
          </div>
        </div>

        <div className="home-img">
          <div className="rhombus">
            <Image src={heroimg} >

            </Image>
          </div>
        </div>

        <div className="rhombus2"></div>
      </section>
    </div>
  );
};

export default Hero;