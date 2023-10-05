import React from 'react';
import Project from '../components/Project.js';
import './projects.css';

const Projects = () => {
    return (
        <div className="project-box">
            <Project
                author="Ethan Reader"
                title="The shaved potato"
                content="Esse et irure occaecat ea do cillum enim voluptate cillum labore irure veniam incididunt. Dolore deserunt in minim commodo reprehenderit laborum voluptate incididunt consectetur. Voluptate commodo aliqua et pariatur cupidatat est."
            />
            <Project
                author="Ethan Reader"
                title="The shaved potato"
                content="Esse et irure occaecat ea do cillum enim voluptate cillum labore irure veniam incididunt. Dolore deserunt in minim commodo reprehenderit laborum voluptate incididunt consectetur. Voluptate commodo aliqua et pariatur cupidatat est."
            />{' '}
            <Project
                author="Ethan Reader"
                title="The shaved potato"
                content="Esse et irure occaecat ea do cillum enim voluptate cillum labore irure veniam incididunt. Dolore deserunt in minim commodo reprehenderit laborum voluptate incididunt consectetur. Voluptate commodo aliqua et pariatur cupidatat est."
            />{' '}
            <Project
                author="Ethan Reader"
                title="The shaved potato"
                content="Esse et irure occaecat ea do cillum enim voluptate cillum labore irure veniam incididunt. Dolore deserunt in minim commodo reprehenderit laborum voluptate incididunt consectetur. Voluptate commodo aliqua et pariatur cupidatat est."
            />
        </div>
    );
};

export default Projects;
