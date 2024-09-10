import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero">
      <div className="hero container">
        <div>
          <div className="video-background">
            <video autoPlay muted loop>
              <source src="/bg.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <h1>Welcome, <span></span></h1>
          <h1>"Hack. Create. Innovate."<span></span></h1>
          <p>Unleash your creativity at our intense, 48-hour hackathon where tech enthusiasts, developers, and designers come together to build innovative software solutions. Collaborate, compete, and showcase your skills in a dynamic and fun environment. Whether you're a seasoned coder or just starting out, there's a place for you to make an impact and bring your ideas to life. Get ready for exciting challenges, networking opportunities, and awesome prizes!</p>
          <a href="/register" type="button" className="cta">Register</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;