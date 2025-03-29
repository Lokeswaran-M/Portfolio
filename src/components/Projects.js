import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Works</h2>
      <div className="project-list">
        <div className="project-item">
          <h3>Frontend Development</h3>
          <p>
            I specialize in building responsive and dynamic user interfaces using 
            <strong> React, React Native, JavaScript, TypeScript, HTML, CSS, Bootstrap, and TailwindCSS</strong>. 
            My projects focus on delivering seamless user experiences with clean and efficient code.
          </p>
          <a href="#">View Projects</a>
        </div>
        <div className="project-item">
          <h3>Backend Development</h3>
          <p>
            Proficient in <strong>Node.js, Express.js, MySQL, MongoDB, Swagger, and Thunder Client</strong>, 
            I develop secure, high-performance, and scalable backend solutions. 
            My backend projects ensure smooth API communication and database management.
          </p>
          <a href="#">Explore More</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
