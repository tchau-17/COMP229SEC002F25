/*Assignment1 - Thai Chau Dao - 301420688 - Sept 23, 2025 */
import React from 'react';
import './Projects.css'; 

const projectsData = [
  {
    id: 1,
    title: 'Electronic Device Online Store',
    description: 'Manage online sales of electronic devices including inventory management, order processing, and sales reporting. I took on the role of creating database by SQL.',
    role: 'SQL Developer',
    image: 'sqlproject.png'
  },
  {
    id: 2,
    title: 'Smart HomeLink Mobile App',
    description: 'Collaborated in a team using Agile practices for the development of an SRS document for a mobile app, Smart HomeLink, which helps house owner managing appliances such as air conditioners, washing machines, doors, windows and lighting systems through intelligent automation.',
    role: 'Software Designer',
    image: 'softwarepro.png'
  },
  {
    id: 3,
    title: 'Portfolio',
    description: 'Created a personal portfolio website to showcase my projects and skills. I used React to build the user interface and deployed the site on a cloud hosting service.',
    role: 'Front - End Developer',
    image: 'portpro.png'
  }
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="projects-list">
        {projectsData.map(project => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-role">Role: {project.role}</p>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;