import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import MetaData from '../../components/MetaData/MetaData';

const About = () => {
  return (
    <section id="about" className="text-center">
      <MetaData 
        title="About Me | Jessica Scheck Portfolio App" 
        description="Welcome to Jessica Scheck's portfolio! Learn more about my journey and skills as a web developer." 
      />
      <div className="container">
        <h2 className="mb-5"><br />About Me</h2>
        <div className="profile-container mx-auto">
          <img
            src="./assets/contact-photo-me.png" 
            alt="Profile"
            className="profile-img rounded-circle"
          />
        </div>
        <div className="bio-container mt-4">
          <p>
            Welcome! I am a passionate web developer with a strong foundation in front-end technologies.
            I love turning ideas into beautiful and interactive web applications that are WCAG compliant. 
          </p>
          <p>
            My skills include HTML/CSS, JavaScript, and React.js. I am always eager to learn new technologies
            and explore creative solutions to challenging problems.
          </p>
          <p>
            Let's collaborate and create something amazing together!
          </p>
        </div>
        {/* Button for the resume download page */}
        <div className="mt-4">
          <Link to="/resume" className="btn btn-primary">
            View Resume
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
