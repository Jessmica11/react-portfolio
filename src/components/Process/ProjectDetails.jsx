import React from 'react';

const ProjectDetails = ({ details }) => {
  return (
    <div className="project-details">
      <h4>Details</h4>
      <p>{details}</p>
    </div>
  );
};

export default ProjectDetails;
