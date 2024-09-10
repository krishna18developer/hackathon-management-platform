import React from 'react';

const Services: React.FC = () => {
  return (
    <section id="services">
      <div className="services container">
        <div className="service-top">
          <h1 className="section-title">What is HackAttack?</h1>
          <p>"HackAttack" is a hackathon organized by the Department of Information Technology, featuring both 24-hour and 48-hour events. It aims to connect students with peers, mentors, and industry professionals, allowing participants to explore new technologies, develop skills, and showcase their talent. The hackathon encourages innovation, ethical and responsible technology development, and bridging the gap between academia and industry. Participants work on domains such as AI, ML, Cybersecurity, Web Development, IoT, and more.</p>
        </div>
        <div className="service-bottom">
          <div className="service-item">
            <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" alt="Robotics" /></div>
            <h2>Robotics</h2>
            <p>There is a need to design drones and robots that can solve some of the pressing challenges of India such as handling medical emergencies, search and rescue operations, etc.</p>
          </div>
          <div className="service-item">
            <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" alt="Blockchain & Cybersecurity" /></div>
            <h2>Blockchain & Cybersecurity</h2>
            <p>Provide ideas in a decentralized and distributed ledger technology used to store digital information that powers cryptocurrencies and NFTs and can radically change multiple sectors.</p>
          </div>
          <div className="service-item">
            <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" alt="SMART EDUCATION" /></div>
            <h2>SMART EDUCATION</h2>
            <p>Smart education, a concept that describes learning in the digital age. It enables learners to learn more effectively, efficiently, flexibly, and comfortably.</p>
          </div>
          <div className="service-item">
            <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" alt="Space Technology" /></div>
            <h2>Space Technology</h2>
            <p>Space technology refers to the application of engineering principles to the design, development, manufacture, and operation of devices and systems for space travel and exploration.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;