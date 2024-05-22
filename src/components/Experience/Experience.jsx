import React from 'react'
import './Experience.css'
import regex_logo from "../../assets/images/regex_logo.jpeg"
import metablock_logo from "../../assets/images/metablock_logo.jpeg"
const Experience = () => {
  return (
    <div className='Experience-div' id='experience'>
      <h3 className='ex-name'>Experience</h3>
      <center>My work experience as a Software Engineer and working an <br></br> different components and projects.</center>

      <div className='ex-regex'>
        <div className='ex-div1'>
          <span className='ex-logo'>
            <img src={regex_logo}></img>
          </span>
          <div className='ex-content'>
            <h1>Java full-stack developer</h1>
            <h3>Jaipur</h3>
            <h4>Jun 2023 - Apr 2024</h4>
          </div>
        </div>
        <p className='meta-block-p'>Ambitious Java Full Stack Developer with hands-on experience as a Trainee & Intern at REGex Software. Proficient in HTML, CSS, Bootstrap, JavaScript, React.js, and Java. Enthusiastic about contributing to dynamic projects, adept at applying OOP principles, and showcasing practical problem-solving skills. Eager to leverage technical expertise and internship experience for an entry-level position in Java Full Stack Development.</p>
        <h5>Skills: </h5>
        <ul className='ex-ul'>
          <li>Core Java</li>
          <li>React Js</li>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Bootstrap</li>
          <li>Linux</li>
          <li>SDLC</li>
          <li>Spring Boot</li>
          <li>Windows</li>
          <li>Advance Java</li>
          <li>C (Basic)</li>
        </ul>
      </div>
      <div className='ex-regex'>
        <div className='ex-div1'>
          <div className='ex-logo'>
            <img src={metablock_logo}></img>
          </div>
          <div className='ex-content'>
            <h1>Blockchain development</h1>
            <h3>Jaipur</h3>
            <h4>Jun 2022 - May 2023</h4>
          </div>
        </div>
        <p className='meta-block-p'>
          Completed a rigorous blockchain development course at MetaBlock Technologies from 2022 to 2023. Acquired a robust foundation in blockchain technology, including smart contracts, DApps, consensus algorithms, and security protocols. Practical experience gained through hands-on projects and real-world applications, developing and deploying blockchain solutions. MetaBlock Technologies training has refined my skills, positioning me as a proficient and knowledgeable professional in this rapidly evolving field.</p>
        <h5>Skills: </h5>
        <ul>
          <li>Blockchain</li>
          <li>Web-3</li>
          <li>Solidty</li>
          <li>Tokan</li>
          <li>Coin</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
      </div>
    </div>
  )
}

export default Experience;
