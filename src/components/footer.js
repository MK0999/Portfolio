import React from 'react';
import '../styles/footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
 const Footer = ()=> {

   
  return (
    <footer className="footer">
 
    <div>
        <ul>
            <li className="icons"><FontAwesomeIcon icon= { faEnvelope}   /></li>
            <li><FontAwesomeIcon icon= { faLinkedin} /></li>
        </ul>
    </div>
    </footer>
  )
 }
 export default Footer