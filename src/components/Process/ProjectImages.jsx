import React from 'react';

const ProjectImages = ({ images }) => {
  return (
    <div className="project-images">
      {images.map((image, index) => (
        <img key={index} src={image} alt="Project visual" className="img-fluid" />
      ))}
    </div>
  );
};

export default ProjectImages;
