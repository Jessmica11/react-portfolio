import React, { useState } from 'react';
import './Project.css';

function Project({ project }) {
  const {
    id,
    title,
    role,
    tags,
    description,
    details,
    imageUrl,
    externalUrl,
    gitHubUrl
  } = project;

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <div className={`card project-card project-${id}`}>
        <img src={imageUrl} alt={title} className="card-img-top" />

        <div className="overlay">
          <h3 className="overlay-title">{title}</h3>
          <p className='overlay-project-role'><strong>Project Role:</strong> {role}</p>
          <p className="overlay-description">{description}</p>
          <p className='overlay-project-tags'><strong>Tools:</strong> {tags.join(', ')}</p>

          <div className="button-group">
            <button className="btn btn-primary overlay-btn" onClick={openModal}>
              Read Case Study
            </button>
            {externalUrl && (
              <a href={externalUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary overlay-btn">
                View Live
              </a>
            )}
            {gitHubUrl && (
              <a href={gitHubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary overlay-btn">
                GitHub Repo
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <h2>{title}</h2>
            <p><strong>Project Role:</strong> {role}</p>
            <ul>
              {details && details.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Project;
