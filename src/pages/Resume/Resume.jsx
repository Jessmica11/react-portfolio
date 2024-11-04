import React from 'react';

const Resume = () => {
  const resumeFilePath = './assets/Jessica-Scheck-Web-Dev-IT-Resume-2024.pdf';

  return (
    <section id="resume">
      <div className="container">
        <h2 className="text-center mb-4">My Resume</h2>
        <div className="text-center">
          <p>Download my resume for more details about my skills and experience.</p>
          <a href={resumeFilePath} download="Jessica_Scheck_Resume.pdf" className="btn btn-primary" aria-label="Download Jessica Scheck's resume">
            <strong>Download</strong>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;