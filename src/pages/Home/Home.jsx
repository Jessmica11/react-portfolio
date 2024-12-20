import React from 'react';
import { Link } from 'react-router-dom';
import MetaData from '../../components/MetaData/MetaData';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="py-5 text-center">
      <MetaData title="Welcome | Jessica Scheck Portfolio" description="Explore Jessica Scheck's portfolio and discover her projects and skills." />
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h2 className="display-4 mb-4">Welcome to My Portfolio</h2>
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
            <Link to="/portfolio" className="btn btn-primary">
              See My Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
