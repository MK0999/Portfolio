import React from 'react';
import '../styles/footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
 const Footer = ()=> {

   
  return (
    <footer className="footer">
 
    <div className='icons'>
   
            <div className="icons"><FontAwesomeIcon icon= { faEnvelope}   /></div>
            <div className='linkedin'><FontAwesomeIcon icon= { faLinkedin} /></div>
      
    </div>
    </footer>
  )
 }
 export default Footer