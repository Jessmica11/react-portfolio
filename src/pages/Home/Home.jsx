import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="py-5 text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h1 className="display-4 mb-4">Welcome to My Portfolio</h1>
            <p className="lead">
              I'm a passionate web developer with a focus on creating meaningful and innovative projects.
            </p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6 mx-auto">
            <h2 className="mb-3">Skills</h2>
            <ul className="list-unstyled">
              <li>React.js</li>
              <li>JavaScript (ES6+)</li>
              <li>GraphQL</li>
              <li>JWT</li>
              <li>MySQL</li>
              <li>Handlebars.js</li>
              <li>...</li>
              {/* I'll redo this section to be more "me" */}
            </ul>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-8 mx-auto">
            <p className="mb-4">
              Interested in working together or have a project idea? Let's connect and bring it to life!
            </p>
            <a href="/contact" className="btn btn-primary">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
