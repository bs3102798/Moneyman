import React from 'react';

const Resume = () => {
    return (
        <section id="about">
            <div>
                <h1>Resume Page</h1>
                <p>Download my <a href="link-to-resume" target="_blank" rel="noopener noreferrer">resume</a></p>
                <h1>Front-end Proficiencies</h1>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>Responsive design</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                </ul>
                <h1>Back-end Proficiencies</h1>
                <ul>
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL</li>
                    <li>MongoDB, Mongoose</li>
                    <li>Rest</li>
                    <li>GraphQL</li>
                </ul>
            </div>
        </section>
    );
};

export default Resume;