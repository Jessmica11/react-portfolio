import React from "react";
import { Parallax } from "react-parallax";
import MetaData from "../../components/MetaData/MetaData";
import "./UXProcess.css";

const UXProcess = () => {
  return (
    <div className="ux-process-container">
      <MetaData
        title="UX Process | Jessica Scheck Portfolio"
        description="Learn more about Jessica’s strategic, data-informed UX process — from discovery to optimization."
      />

      <Parallax bgImage="/images/ux-bg.jpg" strength={400}>
        <div className="parallax-section text-center">
          <h2 className="mb-5">User-First. Strategy-Led. Data-Informed.</h2>
          <p>
            I design with intention—balancing empathy, research, and analytics
            to build experiences that serve users and drive results.
          </p>
        </div>
      </Parallax>

      <section className="ux-steps container">
        <h3 className="text-center mt-5 mb-4">My UX / CRO Process</h3>
        <ul>
          <li>
            <strong>🧠 Discover:</strong> Stakeholder interviews, tech
            alignment, business goals
          </li>
          <li>
            <strong>🔍 Research:</strong> GA4 insights, heatmaps, behavioral
            metrics
          </li>
          <li>
            <strong>✍️ Map & Define:</strong> User flows, journey mapping,
            friction points
          </li>
          <li>
            <strong>🎨 Design & Prototype:</strong> Wireframes and high-fidelity
            prototypes
          </li>
          <li>
            <strong>🧪 Test & Learn:</strong> A/B testing, analytics tracking,
            HubSpot forms
          </li>
          <li>
            <strong>📊 Optimize & Report:</strong> GA4 Explore reports,
            conversion segmentation, Looker Studio dashboards
          </li>
        </ul>
      </section>

      <Parallax bgImage="/images/tools-bg.jpg" strength={300}>
        <div className="parallax-section text-center">
          <h3>Tools I Use</h3>
          <p>
            GA4, HubSpot, Figma, Looker Studio, Usabilla/GetFeedback, CrazyEgg,
            Search Console, SEMRush, Moz, Ahrefs
          </p>
        </div>
      </Parallax>

      <section className="cta-section text-center">
        <h3 className="mt-5">Want to see this process in action?</h3>
        <a href="/portfolio" className="btn btn-primary mt-3">
          Explore My Work →
        </a>
      </section>
    </div>
  );
};

export default UXProcess;
