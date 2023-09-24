import React from 'react';
import '../styles/about.css';

const About = ()=> {
    return (
      
  
      <div className="content" >
      <div className="intro">
          <h2 className="intro-heading">About Me</h2>
          <p className="intro-para">I'm Kirandeep Kaur, a dedicated web developer with a Bachelor's
          in Computer Science from India and a Full Stack Web Development certification 
          from Carleton University, Ottawa. My passion for 
          web development drives my work ethic, making me a committed and detail-oriented professional. </p>
          <button className="intro-button"><a className='resume-btn' href="https://docs.google.com/document/d/1NlenKCHnqz6kgExoywBZRU6MI92eZqDG/edit">Resume</a></button>
        </div>
          <div className="photo">
            <img src="./assets/IMG-2264.heic" alt='name'></img>
        </div>
      </div>
     
    )
   }
   export default About