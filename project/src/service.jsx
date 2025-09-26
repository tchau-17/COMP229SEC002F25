/*Assignment1 - Thai Chau Dao - 301420688 - Sept 23, 2025 */
import React from 'react';
import './Service.css';

const servicesData = [
  {
    title: 'Web Development',
    description: 'Design and development of responsive and modern websites.',
    image: 'webdev.jpg'
  },
  {
    title: 'Mobile Apps',
    description: 'Development of cross-platform mobile applications.',
    image: 'mobileapp.webp'
  },
  {
    title: 'General Programming',
    description: 'Providing programming solutions in various languages.',
    image: 'program.webp'
  }
];

const Service = () => {
  return (
    <div className="services-container">
      <h2>Services List</h2>
      <div className="services-list">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} alt={service.title} className="service-image" />
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service
