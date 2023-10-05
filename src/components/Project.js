import React from 'react';
import './projects.css';

const Project = ({ author, title, content }) => {
    let clicked = false;
    function popOutComponent(event) {
        let element = event.currentTarget.id;
        let toStyle = document.getElementById(element);
        if (!clicked) {
            toStyle.style.position = 'fixed';
            toStyle.style.top = '10%';
            toStyle.style.left = '30%';
            toStyle.style.zIndex = 3;
            toStyle.style.width = '600px';
            toStyle.style.height = '500px';
            toStyle.style.scrollBehavior = 'smooth';
            toStyle.style.border = 'none';
            toStyle.style.boxShadow =
                '0 0 150px 50px black, 0 0 150px 50px lightgray ';
            clicked = true;
        } else {
            toStyle.style.position = 'relative';
            toStyle.style.top = '0';
            toStyle.style.left = '0';
            toStyle.style.zIndex = 1;
            toStyle.style.width = '350px';
            toStyle.style.height = 'auto';
            toStyle.style.boxShadow = '5px 2px 0 black';
            clicked = false;
        }
    }
    return (
        <div className="project" id="project-one" onClick={popOutComponent}>
            {' '}
            <h1 id="project-title">{title}</h1>
            <p id="project-author">{author}</p>
            <p id="project-content">{content} </p>
        </div>
    );
};

export default Project;
