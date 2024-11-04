import React from 'react';

const About = () => {
  return (
    <section id="about" className="text-center">
      <div className="container">
        <h2 className="mb-5">About Me</h2>
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
            My skills include HTM/CSS, JavaScript, and React.js. I am always eager to learn new technologies
            and explore creative solutions to challenging problems.
          </p>
          <p>
            Let's collaborate and create something amazing together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
