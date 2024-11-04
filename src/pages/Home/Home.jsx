import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="py-5 text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h2 className="display-4 mb-4"><br />Welcome to My Portfolio</h2>
            <p className="lead">
              I'm a passionate web developer with a focus on creating meaningful and innovative projects.
            </p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6 mx-auto">
            <p>With more than 10 years of professional experience, I have honed my skills in optimizing digital content for web platforms, improving user experiences, and driving digital engagement. 
              <br /><br />
              I bring a versatile skill set, a strong analytical mindset, and a commitment to excellence in every role I undertake. I am passionate about leveraging my diverse background to create meaningful digital experiences and drive organizational success.
            </p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-8 mx-auto">
            <p className="mb-4">
              Interested in working together or have a project idea? Let's connect and bring it to life!
            </p>
            <Link to="/contact" className="btn btn-primary">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
