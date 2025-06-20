import React, { useState } from 'react';

export const Projects = () => {

    const [projects, setProjects] = useState([
        {
            name : 'Space Exploration Hub',
            description : 'In progress, expected to finish by Aug 2025',
            link : ''
        }, {
            name : 'C compiler',
            description : 'In progress, expected to finish by end of 2025',
            link : ''
        }
    ]);

    const projectsList = projects.map((project, index) => {
        return <li key={index}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <p>{project.link}</p>
        </li>
    });

    return (
        <div className='projects'>
            <h1>Projects</h1>
            <hr/><br/>
            <ul>{projectsList}</ul>
        </div>
    );
}