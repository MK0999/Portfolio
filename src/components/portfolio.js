'use client'
import React from 'react';
import cheatsheetImage from '../assets/cheatsheet.png';
import mediabrowserImage from '../assets/mediabrowser.png';
import notesImage from '../assets/notes.png';
import weatherImage from '../assets/weather.png';
import quizImage from '../assets/quiz.png';
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
          <img className="test" style={styles.bounce} src= { cheatsheetImage}alt='cheatsheet' />
        <p>Cheatsheet</p>
           <button className="repo-button"><a  href="https://github.com/Teelsam/CheatSheetGen">Repository</a></button>
           <button className="deploy-button"><a href="https://obscure-stream-33374-4c4296c6212a.herokuapp.com/">Deploy</a></button>
         </div>
       
         <div className='imgcontainer'>
        <img src= {mediabrowserImage} alt='movie' />
          <p>Movie Browser</p>
          <button className="repo-button"><a href="https://github.com/99Anvar99/Media-Universe">Repository</a></button>
           <button className="deploy-button"><a href=" https://99anvar99.github.io/Media-Universe/">Deploy</a></button>
          </div>
          <div className='imgcontainer'>
          <img src= {notesImage} alt='schedule'  />
          <p>Work Day Scheduler</p>
          <button className="repo-button"><a href="https://github.com/MK0999/almanac">Repository</a></button>
           <button className="deploy-button"><a href="https://mk0999.github.io/almanac/">Deploy</a></button>
          </div>
       </div>
       <div className='bottomimg'>
       <div className='imgcontainer'>
         <img src={weatherImage} alt='weather' />
         <p>Weather Forecast</p>
          <button className="repo-button"><a href="https://github.com/MK0999/shriveled">Repository</a></button>
           <button className="deploy-button"> <a href="https://mk0999.github.io/shriveled/">Deploy</a></button>
          </div>
          <div className='imgcontainer'>
           <img src={quizImage} alt='quiz' />
           <p>Quiz</p>
          <button className="repo-button"><a href="https://github.com/MK0999/protestation">Repository</a></button>
           <button className="deploy-button"><a href="https://mk0999.github.io/protestation/">Deploy</a></button>
          </div>
        </div>
    </div>
    
  )
 }
 export default Project