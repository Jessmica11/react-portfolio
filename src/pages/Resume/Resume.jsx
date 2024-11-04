import React from 'react';

const Resume = () => {
  const resumeFilePath = './assets/Jessica-Scheck-Web-Dev-IT-Resume-2024.pdf';

  return (
    <section id="resume">
      <div className="container">
        <h2 className="text-center mb-4">Resume</h2>
        <div className="text-center">
          <p>Download my resume to learn more about my skills and experience.</p>
          <a href={resumeFilePath} download="Jessica_Scheck_Resume.pdf" className="btn btn-primary">
            <strong>Download My Resume</strong>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;