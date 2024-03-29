import React from 'react';
import './Project.css';

function Project({ project }) {
  const { id, title, description, imageUrl, externalUrl, gitHubUrl } = project;

  return (
    <div className={`card project-card project-${id}`}>
      <div className="overlay">
        <h5 className="overlay-title">{title}</h5>
        <p className="overlay-description">{description}</p>
        <a href={externalUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary overlay-btn">
          View Live
        </a>
        <a href={gitHubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary overlay-btn">
          GitHub Repo
        </a>
      </div>
      <img src={imageUrl} alt={title} className="card-img-top" />
    </div>
  );
}

export default Project;
