import React from 'react';

const Portfolio = () => {
    const projects = [
        {
            title: 'Note-taker-express',
            description: 'Express',
            demoLink: 'https://note-taker-express124-a5eb4acdd8bc.herokuapp.com/',
            githubLink: 'https://github.com/bs3102798/note-taker-express'
        },
        {
            title: 'Tech-blog',
            description: 'bcryptjs, connect-session-sequelize, dotenv, express, express-handlebars, express-session, handlebars, mysql2, sequelize',
            demoLink: 'https://bs3102798-tech-blog-d05f0f76899a.herokuapp.com/',
            githubLink: 'https://github.com/bs3102798/Tech-blog'
        },

        {
            title: 'SQL-Employee-Tracker',
            description: 'dependencies, cfonts, chalk,console.table,inquirer, mysql2',
            demoLink: 'https://project2-demo.com',
            githubLink: 'https://github.com/bs3102798/SQL-Employee-Tracker'
        },
        {
            title: 'e-commerce store',
            description: 'Materialize CSS,JSON,Sequelize,Handlebars',

            githubLink: 'https://github.com/guapjorge/gababara'
        },

    ];

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