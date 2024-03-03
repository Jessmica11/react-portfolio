import React from 'react';

const Project = ({ project }) => {
  const { title, description, imageUrl, externalUrl } = project;

  return (
    <div className="card">
      <div className="card-img-container">
        <img src={imageUrl} className="card-img-top" alt={title} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={externalUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          View Project
        </a>
      </div>
    </div>
  );
};

export default Project;
