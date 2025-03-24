import React from 'react';

const ProcessOverview = ({ process }) => {
  return (
    <div className="process-overview">
      <h3>My Process</h3>
      {process.map((phase, index) => (
        <div key={index} className="process-phase">
          <h4>{phase.name}</h4>
          <ul>
            {phase.steps.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ProcessOverview;
