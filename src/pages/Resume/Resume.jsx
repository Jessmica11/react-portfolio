import React from "react";
import MetaData from "../../components/MetaData/MetaData";

const Resume = () => {
  const resumeFilePath = "./assets/Jessica-Scheck-UX-UI-2025.pdf";

  return (
    <section id="resume">
      <MetaData
        title="Resume | Jessica Scheck Portfolio"
        description="View the professional resume of Jessica Scheck, a passionate web developer with expertise in front-end technologies, UX design, and digital marketing."
      />
      <div className="container">
        <h2 className="text-center mb-5">My Resume</h2>
        <div className="text-center">
          <p>
            Download my resume for more details about my skills and experience.
          </p>
          <a
            href={resumeFilePath}
            download="Jessica-Scheck-Resume.pdf"
            className="btn btn-primary"
            aria-label="Download Jessica Scheck's resume"
          >
            <strong>Download</strong>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
