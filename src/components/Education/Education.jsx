import React from 'react'
import './Education.css'
import education_1 from "../../assets/images/education_1.jpeg"
import project_2 from "../../assets/images/project_2.png"
import project_3 from "../../assets/images/project_3.jpeg"
function Education() {
    return (
        <div className='Education-div' id='education'>
            <h1>Education</h1>
            <center>My education has been a journey of self-discovery and growth.<br></br> My education details are as follows.</center>

            <div className='ed-parent'>
                <div className='ed-div'>
                    <div className='ed-logo'>
                        <img src={education_1}></img>
                    </div>

                    <div className='ed-in'>
                        <h2>B.A (Bachelor of Arts)</h2>
                        <h3>Rajasthan, Jaipur</h3>
                        <span>May 2021 - 2024</span>
                    </div>
                </div>
            </div>



            <div className='ed-parent'>
                <div className='ed-div'>
                    <div className='ed-logo'>
                        <img src={project_2}></img>
                    </div>

                    <div className='ed-in'>
                        <h2>12th Bord of Senior Secondary</h2>
                        <h3>Rajasthan, Dausa</h3>
                        <span>jun 2020 - 2021</span>
                    </div>
                </div>
            </div>



            <div className='ed-parent'>
                <div className='ed-div'>
                    <div className='ed-logo'>
                        <img src={project_3}></img>
                    </div>

                    <div className='ed-in'>
                        <h2>10th Bord of Secondary</h2>
                        <h3>Rajasthan, Dausa</h3>
                        <span>june 2018 - 2019</span>
                    </div>
                </div>
                {/* <p>i am persuring Bachelor of Arts from Rajasthan univarcity , i gain how to handle life presher and hard work for user-friendly account creation, display, and transactions. Proficient in Java, data structures, and CLI design, showcasing practical problem-solving skills. </p> */}
            </div>
        </div>
    )
}

export default Education
