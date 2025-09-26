/*Assignment1 - Thai Chau Dao - 301420688 - Sept 23, 2025 */
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <div className="intro-section">
        <h1 className="welcome-heading">Welcome to my Portfolio!</h1>
        <p className="intro-text">
          I am Thai Chau Dao, a Software Engineering Technology student passionate about exploring and building innovative solutions. This website is where I share my projects and learning experiences.
        </p>
      </div>

      <div className="mission-statement">
        <h3>Mission Statement</h3>
        <p>
          My mission is to continuously learn, grow, and create valuable tech products that reflect my skills and passion.
        </p>
      </div>
    </div>
  );
}