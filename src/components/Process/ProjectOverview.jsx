import React from 'react';

const ProjectOverview = ({ project }) => {
  return (
    <div className="project-overview">
      <h3>{project.name}</h3>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectOverview;
