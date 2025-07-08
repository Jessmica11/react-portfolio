import React from "react";
import MetaData from "../../components/MetaData/MetaData";
import Project from "../../components/Project/Project";

const projects = [
  {
    // VELUX
    id: 1,
    title: "Advisory Services Landing Page Optimization",
    description: "UX and CRO optimization of a site-wide business driver.",
    tags: ["GA4", "Looker Studio", "Sitecore"],
    imageUrl: "/assets/dpa-page.png",
    externalUrl:
      "https://www.veluxusa.com/ready-to-buy/design-product-advisors",
    gitHubUrl: null,

    // Modal-only properties
    role: "Web Designer - VELUX",
    details: [
      "Redesigned CTA structure and tracked segmented user intent with UTM parameters.",
      "Implemented `click_advisor` and `form_submit` event tracking across DPA flows.",
      "Created a Looker Studio dashboard to monitor behavior, conversions, and traffic sources.",
      "Collaborated cross-functionally with external agency partners, marketing management, and advisory teams.",
      "Proposed and scoped new content & design features to increase AQLs.",
    ],
  },
  {
    // nano-purification solutions
    id: 2,
    title: "Multi-Region CMS Strategy",
    description:
      "Multi-regional site migration with custom CMS components for 3 regions",
    tags: ["AEM", "SEO", "IA"],
    imageUrl: "/assets/nano-purification-solutions-website.png",
    externalUrl: "https://www.nano-purification.com/en-us",
    gitHubUrl: null,

    // Modal-only properties
    role: "Web Content Specialist - Atlas Copco",
    details: [
      "Led IA, SEO, and accessibility audits for US, UK, and CA rollout.",
      "Worked with global dev teams to build and QA modular CMS components in AEM.",
      "Established content governance standards and brand-aligned templates",
      "Reported monthly analytics results and site performance with Atlas Copco marketing leadership",
    ],
  },
  {
    // National Law Review
    id: 3,
    title: "Legal UX Optimization",
    description:
      "Structured SEO-optimized legal content and led podcast launch.",
    tags: ["SEO", "Drupal", "UX Design"],
    imageUrl: "/assets/natlawreview.com-website.png",
    externalUrl: "https://natlawreview.com/",

    //Modal-only properties
    role: "Web Content Specialist - The National Law Review",
    details: [
      "Published high-volume legal content with keyword strategy.",
      "Produced, co-hosted, and composed original music for the “Legal News Reach” podcast.",
      "Collaborated with Technical Systems Director on responsive web design for Drupal updates.",
      "Used analytics to improve search visibility and reader flow.",
    ],
  },
  {
    // Healthcare Hotspot
    id: 4,
    title: "Healthcare Hotspot",
    description: "Find local providers by ZIP code using real-time data.",
    tags: ["JavaScript", "API Integration", "Design"],
    imageUrl: "/assets/healthcare-hotspot-app.png",
    externalUrl: "https://andrewcmonson.github.io/healthcare-hotspot/",
    gitHubUrl: "https://github.com/Jessmica11/healthcare-hotspot",

    // Modal-only properties
    role: "Full Stack Developer - UNC Full-Stack Program",
    details: [
      "Built a responsive front end with error handling and ZIP code validation.",
      "Fetched real-time provider data via a public healthcare API and displayed location-based results.",
      "Implemented error handling and user input validation for ZIP code searches.",
      "Collaborated with team members via GitHub on branching strategy and deployment.",
    ],
  },
  {
    // Bookshelf App
    id: 5,
    title: "Bookshelf App",
    description: "A place for book lovers to create and save book collections",
    tags: ["Express.js", "API Integration", "Handlebars"],
    imageUrl: "/assets/bookshelf-app.png",
    externalUrl: null,
    gitHubUrl: "https://github.com/Jessmica11/Bookshelf",

    // Modal-only properties
    role: "Full Stack Developer - UNC Full-Stack Program",
    details: [
      "Developed a full-stack web app using Express.js, Sequelize, and Handlebars.",
      "Integrated OpenLibrary API to support title and author book searches.",
      "Built a multi-route RESTful API to support user login, book saving, and shelf organization.",
      "Designed mobile-friendly UI with collapsible nav and shelf-based book dashboards.",
    ],
  },
  // add more projects as I create
];

const ProjectList = () => {
  return (
    <section id="portfolio">
      <MetaData
        title="Project List | Jessica Scheck Portfolio"
        description="Explore the various projects I have worked on as a web developer and UX designer."
      />
      <div className="container">
        <h2 className="text-center mb-5">
          <br />
          Explore My Projects
        </h2>
        <div className="row row-cols-2 mb-4">
          {projects.map((project) => (
            <div key={project.id} className="col-md-6 mb-4">
              <Project project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectList;
