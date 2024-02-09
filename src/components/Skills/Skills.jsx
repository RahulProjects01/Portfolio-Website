// Skills.js

import React from 'react';
import './Skills.css';

const Skills = () => {
    return (
        <div className='skills-div'>
            <h1>Skills</h1>
            <center>Here are some of my skills on which I have been working for the past 2 years.</center>
            <div className='skills-div-first'>
                <div className='skills-first-child1'>
                    <h2>Frontend</h2>
                    <ul>
                        <li>React Js</li>
                        <li>JavaScript</li>
                        <li>Bootstrap</li>
                        <li>HTML-5</li>
                        <li>CSS-3</li>
                    </ul>
                </div>
                <div className='skills-first-child1'>
                    <h2>Backend</h2>
                    <ul className='skills-first-ul1'>
                        <li>Java</li>
                        <li>Advance java</li>
                        <li>C (Basic)</li>
                        <li>Linux</li>
                        <li>Git & GitHub</li>
                        <li>SDL</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Skills;
