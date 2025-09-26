/*Assignment1 - Thai Chau Dao - 301420688 - Sept 23, 2025 */
import React from 'react';
import './Aboutme.css';

export default function Aboutme() {
    return (
        <div className="about-me-container">
            <h2>Thai Chau Dao</h2>
            <div className="about-me-content">
                <img src="/pic1.JPG" alt="About Me" className="profile-img" />
                <ul className="about-me-list">
                    <li>Studying at Centennial College in the Software Engineering Technology (Co-op) Advanced Diploma program.</li>
                    <li>Passionate about software development, problem-solving, and emerging technologies.
                        <br/>
                        <a href="/ThaiChauDao_Resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-link">
                            View my Resume
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}