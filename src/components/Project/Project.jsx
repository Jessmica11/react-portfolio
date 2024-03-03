import React from 'react';
import PropTypes from 'prop-types';
import './Project.css'; 

const Project = ({ imageUrl, title, description, externalUrl }) => {
  return (
    <div className="project-box">
      <a href={externalUrl} target="_blank" rel="noopener noreferrer">
        <img src={imageUrl} alt={title} className="project-image" />
        <div className="project-details">
          <h3 className="project-title">{title}</h3>
          <p className="project-description">{description}</p>
        </div>
      </a>
    </div>
  );
};

Project.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  externalUrl: PropTypes.string.isRequired,
};

export default Project;
