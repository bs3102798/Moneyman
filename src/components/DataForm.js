import React, { useState } from 'react';


function Dashboard() {
  const [totalCost, setTotalCost] = useState(0);

  function DataForm({ totalCost }) {
    const handleDataFormSubmit = () => {
      // Access the totalCost prop here and use it
      console.log('Total Cost from DataForm:', totalCost);
    };
  
    return (
      <div>
        {/* Your DataForm content */}
        <button onClick={handleDataFormSubmit}>Submit DataForm</button>
      </div>
    );
  }


const Portfolio = () => {
    return (
        <section id="portfolio">
            <h2>Portfolio</h2>
            <div className="projects">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Demo</a>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;