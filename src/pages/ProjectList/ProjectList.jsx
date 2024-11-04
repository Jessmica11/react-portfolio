import React from 'react';
import Project from '../../components/Project/Project';

const projects = [
  {
    id: 1,
    title: 'VELUX USA & Canada Websites',
    description: 'Complete website & SEO management and reporting for VELUXUSA.com and VELUX.ca (en-CA & fr-CA)',
    imageUrl: '/assets/VELUX-USA-website.png',
    externalUrl: 'https://www.veluxusa.com/',
    externalUrl: 'https://www.velux.ca/',
  },
  {
    id: 2,
    title: 'Atlas Copco & nano-purification solutions',
    description: 'Website Migration, Management, Technical SEO, and global digital marketing',
    imageUrl: '/assets/nano-purification-solutions-website.png',
    externalUrl: 'https://www.nano-purification.com/en-us',
  },
  {
    id: 3,
    title: 'Healthcare Hotspot',
    description: 'Search by zipcode for providers near you.',
    imageUrl: '/assets/healthcare-hotspot-app.png',
    externalUrl: 'https://andrewcmonson.github.io/healthcare-hotspot/',
    gitHubUrl: 'https://github.com/Jessmica11/healthcare-hotspot'
  },
  {
    id: 4,
    title: 'Bookshelf App',
    description: 'A place for book lovers to create and save book collections',
    imageUrl: '/assets/bookshelf-app.png',
    externalUrl: 'https://book-shelf-ec28e1e38c1b.herokuapp.com/',
    gitHubUrl: 'https://github.com/Jessmica11/Bookshelf'
  },
  // add more projects later
];

const ProjectList = () => {
  return (
    <section id="portfolio">
      <div className="container">
        <h2 className="text-center mb-5">My Portfolio</h2>
        <div className="row row-cols-2 mb-4">
          {projects.map((project) => (
            <div key={project.id} className="col-md-6 mb-4">
              <Project project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectList;
