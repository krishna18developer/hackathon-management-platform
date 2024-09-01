'use client';
import React from 'react';
import Image from 'next/image'; // Using Next.js Image component for optimization
import Link from 'next/link'; // Use Link for navigation between pages
import pic from '../../public/imgs/teampic.jpg'; // Example import for the image used
import './team.css'

const Team = () => {
  const scrollNext = () => {
    const widthItem = document.querySelector('.item').offsetWidth;
    document.getElementById('formList').scrollLeft += widthItem;
  };

  const scrollPrev = () => {
    const widthItem = document.querySelector('.item').offsetWidth;
    document.getElementById('formList').scrollLeft -= widthItem;
  };

  return (
    <div>
      <header className="header">
        <Link href="/" className="logo">logo</Link>

        <nav className="navbar">
          <Link href="/index.html" style={{ "--i": 1 }}>Home</Link>
          <Link href="/team.html" style={{ "--i": 2 }} className="active">About</Link>
          <Link href="#" id="teamLink" style={{ "--i": 3 }}>Team</Link>
          <Link href="#register" style={{ "--i": 4 }}>Register</Link>
          <Link href="#" id="loginButton" style={{ "--i": 5 }}>Login</Link>
        </nav>

        <div className="social-media">
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
        <div id="formList">
          <div id="list">
            {teamMembers.map((member, index) => (
              <div key={index} className="item">
                <Image src={pic} alt={`${member.name} Avatar`} className="avatar" />
                <div className="content">
                  <table width="100%" cellSpacing="0">
                    <tbody>
                      <tr>
                        <td>Name</td>
                        <td>{member.name}</td>
                      </tr>
                      <tr>
                        <td>Occupation</td>
                        <td>{member.occupation}</td>
                      </tr>
                      <tr>
                        <td>Strength</td>
                        <td>{member.strength}</td>
                      </tr>
                      <tr>
                        <td colSpan="2" className="nameGroup">{member.group}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="direction">
          <button id="prev" onClick={scrollPrev}> &lt; </button>
          <button id="next" onClick={scrollNext}> &gt; </button>
        </div>
      </section>
    </div>
  );
};

// Dummy data for team members
const teamMembers = [
  { name: "Chopper", occupation: "Doctor", strength: "Cuteness", group: "Straw Hat Pirates Member" },
  { name: "Brook", occupation: "Pirate", strength: "Immortality", group: "Straw Hat Pirates Member" },
  { name: "Sanji", occupation: "Chef", strength: "Flame Leg", group: "Straw Hat Pirates Member" },
  { name: "Usopp", occupation: "Sniper", strength: "Lying", group: "Straw Hat Pirates Member" },
  { name: "Nami", occupation: "Navigator", strength: "Bullying Teammates", group: "Straw Hat Pirates Member" },
  { name: "Robin", occupation: "Pirate", strength: "Thousand Arms", group: "Straw Hat Pirates Member" },
];

export default Team;
