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
            <h2>Intelligence in Healthcare</h2>
            <p>Focus on developing advanced solutions that leverage artificial intelligence and machine learning to improve patient care, enhance diagnostics, or streamline healthcare operations. Ideas could include predictive analytics for disease outbreaks, AI-driven diagnostic tools, or personalized treatment plans based on genetic data.</p>
          </div>
          <div className="service-item">
            <h2>Digital Education</h2>
            <p>Create innovative digital tools and platforms that enhance learning experiences and educational accessibility. Projects might involve virtual classrooms, gamified learning environments, adaptive learning systems, or tools to support remote and inclusive education.</p>
          </div>
          <div className="service-item">
            <h2>Fintech</h2>
            <p>Develop financial technology solutions aimed at transforming the financial services industry. This could involve creating new apps for personal finance management, blockchain-based payment systems, AI for fraud detection, or tools that enhance financial literacy and inclusion.</p>
          </div>
          <div className="service-item">
            <h2>Smart City Planning</h2>
            <p>Design solutions that contribute to the development of intelligent urban environments. Projects could focus on optimizing traffic management, improving energy efficiency, enhancing public safety through technology, or creating systems for better urban resource management.</p>
          </div>
          <div className="service-item">
            <h2>Agri-Innovate</h2>
            <p>Explore technological advancements that can revolutionize agriculture. This might include precision farming tools, IoT applications for monitoring crops and livestock, sustainable farming practices, or innovative supply chain solutions to reduce food waste and increase efficiency.</p>
          </div>
          <div className="service-item">
            <h2>IdeaFlex</h2>
            <p>A flexible theme encouraging participants to tackle any problem or opportunity they’re passionate about. This category allows for creativity and innovation across various domains, with the goal of developing impactful solutions that may not fit neatly into the other categoriess</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;