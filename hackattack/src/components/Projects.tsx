import React from 'react';

const Projects: React.FC = () => {
  return (
    <section id="projects">
      <div className="video-background">
        <video autoPlay muted loop>
          <source src="/bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="projects container">
        <div className="projects-header">
          <div className="poster">
            <a href="#"><img src="/poster.jpg" alt="Hack Attack Poster" /></a>
          </div> 
        </div>
      </div>
    </section>
  );
}

export default Projects;