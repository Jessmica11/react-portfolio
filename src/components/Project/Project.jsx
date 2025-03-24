import React from 'react';
import './Project.css';

function Project({ project }) {
  const { name, description, imageUrl } = project;

  return (
    <div className="project-card">
      <img src={imageUrl} alt={name} className="card-img-top" />
      <div className="card-content">
        <h3 className="project-title">{name}</h3>
        <p className="project-description">{description}</p>
      </div>
    </div>
  );
}

export default Project;
