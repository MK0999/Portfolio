'use client'
import React from 'react';

import '../styles/portfolio.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import projectdata from '../assets/Projectdata.json'

import { bounce } from 'react-animations';


const styles = {
  bounce: {
    animation: 'x 2s',
    animationName: (bounce, 'bounce')
  }
}
 const Project = ()=> {
  return (
 
<div className='container'>
      <div className='topimg '>
        {
          projectdata.map(project => {
            return (
              <div  key = {project.ProjectTitle}className='imgcontainer col-3'>
              <img className="test" style={styles.bounce} src= {project.imgSrc}alt='cheatsheet' />
            <p>{project.ProjectTitle}</p>
               <button className="repo-button"><a  href={project.repoLink}>Repository</a></button>
               <button className="deploy-button"><a href={project.deployed}>Deploy</a></button>
             </div>
            
             )
            })
          }
            </div>
             
        
        
        
    </div>
    
  )
 }
 export default Project





















 