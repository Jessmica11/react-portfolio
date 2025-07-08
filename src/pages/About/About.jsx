import React from "react";
import { Link } from "react-router-dom";
import MetaData from "../../components/MetaData/MetaData";

const About = () => {
  return (
    <section id="about" className="text-center">
      <MetaData
        title="About Me | Jessica Scheck Portfolio"
        description="Welcome to Jessica Scheck's portfolio! Learn more about my journey and skills as a web developer."
      />
      <div className="container">
        <h2 className="mb-5">
          <br />
          About Me
        </h2>
        <div className="profile-container mx-auto">
          <img
            src="./assets/contact-photo-me.png"
            alt="Profile"
            className="profile-img rounded-circle"
          />
        </div>
        <div className="bio-container mt-4">
          <p>
            I’m Jessica Scheck — a UX-focused web designer with a background in
            front-end development, digital strategy, and behavioral analytics.
          </p>
          <p>
            My work blends accessibility-first design with data-informed
            decision-making. With a strong foundation in HTML, CSS, JavaScript,
            and React, I build and optimize user experiences that are not just
            beautiful, but also measurable and meaningful.
          </p>
          <p>
            I care deeply about the full lifecycle of a digital experience —
            from initial research to conversion tracking. Whether I’m designing
            a landing page, refining a form funnel, or collaborating
            cross-functionally, I bring a user-first lens and a strategic
            mindset to every project.
          </p>
          <p>
            Let’s create something intentional, impactful, and user-centered.
          </p>
        </div>
        {/* Button for the resume download page */}
        <div className="mt-4">
          <Link to="/portfolio" className="btn btn-primary">
            View Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
