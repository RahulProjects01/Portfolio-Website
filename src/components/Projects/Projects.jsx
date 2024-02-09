import React from 'react'
import './Projects.css'
import img_02 from "../../assets/images/img_02.jpeg"
import img_03 from "../../assets/images/img_03.jpeg"
import img_04 from "../../assets/images/img_04.jpeg"
function Projects() {
    return (
        <div className='Projects-div' id='projects'>
            <h1>Projects</h1>
            <center>I have worked an a wide range of projects from web opps to<br></br> Banking System ans Portfolio websites.</center>


            <div className='projects-prent'>
                <div className='projects-div-child'>
                    <div className='projects-child1'>
                        <img src={img_02}></img>
                        <h3>Banking Management System</h3>
                        <p>09/2023 - 09/2023</p>

                        <p className='prag'>Developed a Java Banking Management System, implementing OOP principles for user-friendly account operations. <a href='https://github.com/RahulProjects01/coreJava-Projects/blob/master/BankingManagementSystem.java
'>Link</a></p>
                    </div>
                </div>


                <div className='projects-div-child'>
                    <div className='projects-child1'>
                        <img src={img_03}></img>

                        <h3>Portfolio Website</h3>
                        <p>09/02/2024</p>

                        <p className='prag'>Building a dynamic portfolio website with React.js and Bootstrap to highlight my skills, projects, and achievements. Prioritizing a seamless user experience with responsive design.<a href=''></a></p>
                    </div>
                </div>


                <div className='projects-div-child'>
                    <div className='projects-child1'>
                        <img src={img_04}></img>
                        <h3>Cafe Management System</h3>
                        <p>10/2023 - 10/2023</p>

                        <p className='prag'>Created a Cafe Management System using Java, featuring menu display, order placement, and revenue calculation. <a href='https://github.com/RahulProjects01/coreJava-Projects/commit/7c739362b05721b807e82de8af5e26d9daca1b5c'>Link</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
