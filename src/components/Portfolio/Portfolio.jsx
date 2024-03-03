import React from 'react';
import Project from './Project/Project';

const projects = [
  {
    id: 1,
    title: 'Bookshelf App',
    description: 'A place for book lovers to create and save book collections',
    imageUrl: './assets/images/bookshelf-app.png',
    externalUrl: 'https://book-shelf-ec28e1e38c1b.herokuapp.com/',
  },
  {
    id: 2,
    title: 'Healthcare Hotspot',
    description: 'Search by zipcode for providers near you.',
    imageUrl: './assets/images/healthcare-hotspot.png',
    externalUrl: 'https://andrewcmonson.github.io/healthcare-hotspot/',
  },
  // will add more projects later
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="container">
        <h2 className="text-center mb-5">Portfolio</h2>
        <div className="row">
          {projects.map((project) => (
            <div key={project.id} className="col-md-4 mb-4">
              <Project project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
