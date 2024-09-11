import React from 'react';
import '../styles/services.css';

const Services: React.FC = () => {
  return (
    <section id="services">
      <div className="services container">
        <div className="service-top">
          <h1 className="section-title">What is HackAttack?</h1>
          <p>HACK-ATTACK 2024 is a national-level hackathon bringing together innovative minds to solve real-world challenges through technology. Scheduled for December 6th-8th, 2024 , this event offers participants a platform to develop groundbreaking solutions across domains like AI, IoT, Blockchain, and more. With expert-led boot camps, mentoring sessions, and exciting prizes, HACK-ATTACK fosters creativity, teamwork, and technological advancement. Join us for a transformative experience where ideas turn into impactful solutions.</p>
        </div>
        <div className="service-bottom">
          <div className="service-item">
            <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" alt="Smart Healthcare System" /></div>
            <h2>Smart Healthcare System</h2>
            <p>Develop innovative solutions to improve healthcare delivery using technology. This could include designing systems for remote patient monitoring, health data management, or AI-driven diagnostic tools.</p>
          </div>
          <div className="service-item">
            <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" alt="Smart Education System" /></div>
            <h2>Smart Education System</h2>
            <p>Create educational tools and platforms that enhance learning experiences. This may involve developing e-learning applications, interactive educational content, or intelligent tutoring systems.</p>
          </div>
          <div className="service-item">
            <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" alt="Smart Financial System" /></div>
            <h2>Smart Financial System</h2>
            <p>Design and implement financial technologies that streamline banking, investment, and financial management. Focus on innovations like blockchain applications, financial analytics tools, or digital payment systems.</p>
          </div>
          <div className="service-item">
            <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" alt="Smart City Planning" /></div>
            <h2>Smart City Planning</h2>
            <p>Develop solutions for urban planning and management that leverage technology to enhance city infrastructure, public services, and overall quality of life. This includes smart traffic management, energy-efficient buildings, and urban data analytics.</p>
          </div>
          <div className="service-item">
            <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" alt="Sustainability and Environmental Impact" /></div>
            <h2>Sustainability and Environmental Impact</h2>
            <p>Focus on technologies that promote environmental sustainability and address ecological challenges. Projects might involve renewable energy solutions, waste management systems, or environmental monitoring tools.</p>
          </div>
          <div className="service-item">
            <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" alt="Open Innovation" /></div>
            <h2>Open Innovation</h2>
            <p>Encourage collaborative problem-solving and idea generation through open innovation platforms. Develop systems that facilitate crowdsourcing, collaborative research, or idea-sharing within and beyond the hackathon community.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;