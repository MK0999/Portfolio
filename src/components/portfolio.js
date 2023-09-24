'use client'
import React from 'react';

import '../styles/portfolio.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <div className='topimg'>
        <div className='imgcontainer'>
          <img className="test" style={styles.bounce} src= "/assets/cheatsheet.png" alt='cheatsheet'/>
           <button className="repo-button"><a  href="https://docs.google.com/document/d/1NlenKCHnqz6kgExoywBZRU6MI92eZqDG/edit">Repository</a></button>
           <button className="deploy-button"><a href="https://docs.google.com/document/d/1NlenKCHnqz6kgExoywBZRU6MI92eZqDG/edit">Deploy</a></button>
         </div>
       
         <div className='imgcontainer'>
          <img src= "/assets/mediabrowser.png" alt='movie' />
          <button className="repo-button"><a href="https://docs.google.com/document/d/1NlenKCHnqz6kgExoywBZRU6MI92eZqDG/edit">Repository</a></button>
           <button className="deploy-button"><a href="https://docs.google.com/document/d/1NlenKCHnqz6kgExoywBZRU6MI92eZqDG/edit">Deploy</a></button>
          </div>
          <div className='imgcontainer'>
          <img src= "/assets/notes.png" alt='schedule'  />
          <button className="repo-button"><a href="https://docs.google.com/document/d/1NlenKCHnqz6kgExoywBZRU6MI92eZqDG/edit">Repository</a></button>
           <button className="deploy-button"><a href="https://mk0999.github.io/almanac/">Deploy</a></button>
          </div>
       </div>
       <div className='bottomimg'>
       <div className='imgcontainer'>
         <img src="/assets/weather.png" alt='weather' />
          <button className="repo-button"><a href="https://docs.google.com/document/d/1NlenKCHnqz6kgExoywBZRU6MI92eZqDG/edit">Repository</a></button>
           <button className="deploy-button"> <a href="https://mk0999.github.io/shriveled/">Deploy</a></button>
          </div>
          <div className='imgcontainer'>
           <img src="/assets/quiz.png" alt='quiz' />
          <button className="repo-button"><a href="https://docs.google.com/document/d/1NlenKCHnqz6kgExoywBZRU6MI92eZqDG/edit">Repository</a></button>
           <button className="deploy-button"><a href="https://mk0999.github.io/protestation/">Deploy</a></button>
          </div>
        </div>
    </div>
    
  )
 }
 export default Project