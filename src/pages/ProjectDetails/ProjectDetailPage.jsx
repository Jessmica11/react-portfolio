import React from 'react';
import { useLocation } from 'react-router-dom';
import ProjectOverview from './ProjectOverview';
import ProjectImages from './ProjectImages';
import ProjectDetails from './ProjectDetails';
import ParallaxScroll from './ParallaxScroll';
import ProcessOverview from './components/Process/ProcessOverview';

const ProjectDetailPage = () => {
  const location = useLocation();
  const { project } = location.state || {};

  if (!project) {
    return <h2>Project not found</h2>;
  }

  // process steps
  const process = [
    {
      name: 'Research Phase',
      steps: [
        'Discovery of client requirements',
        'Competitive analysis',
        'Audience research',
        'Identifying pain points or user needs',
      ],
    },
    {
      name: 'Design Phase',
      steps: [
        'Wireframing & prototyping',
        'Creating user flows and layouts',
        'User testing & feedback',
        'Design revisions',
      ],
    },
    {
      name: 'Development Phase',
      steps: [
        'Frontend & backend development',
        'Responsive design implementation',
        'Testing (unit, integration, user acceptance testing)',
      ],
    },
    {
      name: 'Implementation Phase',
      steps: [
        'Launching the project (on the web or live environment)',
        'Monitoring post-launch (user feedback, error tracking)',
        'Continuous improvement (updates, bug fixes, optimizations)',
      ],
    },
  ];

  return (
    <div className="container">
      <ProjectOverview project={project} />
      
      {/* Parallax Effect Section */}
      <ParallaxScroll className="parallax-section">
        <ProjectImages images={project.images || [project.imageUrl]} />
      </ParallaxScroll>

      <ProjectDetails details={project.details || 'No additional details provided.'} />

      {/* Process Overview */}
      <ProcessOverview process={process} />
    </div>
  );
};

export default ProjectDetailPage;
