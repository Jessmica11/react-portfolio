import React from 'react';
import { Link } from 'react-router-dom';
import MetaData from '../../components/MetaData/MetaData';
import Project from '../../components/Project/Project';

const projects = [
  {
    id: 1,
    name: 'VELUX',
    description: 'Complete website & SEO management and reporting for VELUXUSA.com and VELUX.ca (en-CA & fr-CA)',
    imageUrl: '/assets/VELUX-USA-website.png',
  },
  {
    id: 2,
    name: 'Atlas Copco',
    description: 'Website Migration, Management, Technical SEO, and global digital marketing for nano-purification solutions',
    imageUrl: '/assets/nano-purification-solutions-website.png',
  },
  {
    id: 3,
    name: 'The National Law Review',
    description: 'Technical SEO, UX Design, Content Strategy, and Digital Marketing',
    imageUrl: '/assets/natlawreview.com-website.png',
  },
  {
    id: 4,
    name: 'Healthcare Hotspot App',
    description: 'Full-stack web application that helps users find healthcare services near them via Ziptastic & NPPES APIs',
    imageUrl: '/assets/healthcare-hotspot-app.png',
  },
  {
    id: 5,
    name: 'Bookshelf App',
    description: 'A place for book lovers to create and save book collections',
    imageUrl: '/assets/bookshelf-app.png',
  },
];

const ProjectList = () => {
  return (
    <section id="portfolio">
      <MetaData 
        title="Project List | Jessica Scheck Portfolio" 
        description="Explore the various projects I have worked on as a web developer and UX designer." 
      />
      <div className="container">
        <h2 style={{ margin: '2rem 0' }} className="text-center">Explore My Projects</h2>
        <div className="row row-cols-2 mb-4">
          {projects.map((project) => (
            <div key={project.id} className="col-md-6 mb-4">
              {/* Pass the project data using state */}
              <Link to={`/project/${project.id}`} state={{ project }} className="project-card-link">
                <Project project={project} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectList;
