import React from 'react';
import '../styles/footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
 const Footer = ()=> {

   
  return (
    <footer className="footer">
 
    <div className='icons'>
   
            <div className="email"> <a href="mailto:kirandeep1995@gmail.com"><FontAwesomeIcon icon= { faEnvelope} beatFade  size="2xl" style={{color: "grey",}} /></a></div>
            <div className='linkedin'><a href="https://www.linkedin.com/in/kirandeep-kaur-337134285/"><FontAwesomeIcon icon= { faLinkedin} beatFade   size="2xl" style={{color: "#547fb0",}}/></a></div>
            <div className='github'> <a href="https://github.com/MK0999"><FontAwesomeIcon icon= { faGithub} beatFade size="2xl" style={{color: "#1fd643",}} /></a></div>
     
    </div>
    </footer>
  )
 }
 export default Footer