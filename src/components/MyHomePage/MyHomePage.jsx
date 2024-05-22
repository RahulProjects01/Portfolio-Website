import React from 'react'
import './MyHomePage.css'
import logo from "../../assets/images/logo.jpg"

const MyHomePage = () => {
    return (

        <div className='home-div' id='home'>
            <div className='home-div-first'>
                <h1>Hi There, I am Rahul Sharma</h1>
                <h2>I am <b>Software Developer</b></h2>
                <p>Full stack software developer with experience in front-end and back-end development, experienced in leading teams.front-end technologies such as HTML, CSS, Bootstrap, JavaScript, and React.js, along with expertise in Java programming and database management using SQL and MYSQL. I am also familiar with version control systems like Git & GitHub and has practical knowledge of the Software Development Life Cycle (SDLC). </p>

                <button className='b-link'><a className='a-link' href='https://drive.google.com/file/d/1KptkrdpPLvM7txctkPxO_Y-eAuN3Dl2P/view?usp=sharing'>Check Resume</a></button>
            </div>
            <div className='home-div-secound'>

                <img src={logo} />

            </div>
        </div>

    )
}

export default MyHomePage
