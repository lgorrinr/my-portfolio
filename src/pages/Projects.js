import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="project">
        <img src="path/to/project1.jpg" alt="Project 1" />
        <p>Project 1 Description</p>
      </div>
      <div className="project">
        <img src="path/to/project2.jpg" alt="Project 2" />
        <p>Project 2 Description</p>
      </div>
      <div className="project">
        <img src="path/to/project3.jpg" alt="Project 3" />
        <p>Project 3 Description</p>
      </div>
    </div>
  );
}

export default Projects;
