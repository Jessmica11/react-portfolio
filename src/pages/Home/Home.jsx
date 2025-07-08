import React from "react";
import { Link } from "react-router-dom";
import MetaData from "../../components/MetaData/MetaData";
import "./Home.css";

const Home = () => {
  return (
    <section id="home" className="py-5 text-center">
      <MetaData
        title="Welcome | Jessica Scheck Portfolio"
        description="Explore Jessica Scheck's portfolio and discover her projects and skills."
      />
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h2 className="mb-5">Empathy-led design. Data-driven outcomes.</h2>
            <h3></h3>
            <p className="lead">
              I'm Jessica Scheck, and I specialize in creating data-informed
              digital experiences that balance business goals with real user
              needs.
              <br></br>
              <br></br>I bring 5+ years of experience across web content, UX
              design, and analytics, within large-scale CMS systems for global
              companies.
              <br></br>
              <br></br>I improve conversion paths, build flexible content
              systems, and design with both clarity and purpose — always
              connecting strategy, design, and measurable results.
            </p>
          </div>
        </div>
        <div className="row mt-4"></div>
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
