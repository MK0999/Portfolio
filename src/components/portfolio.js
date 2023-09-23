'use client'
import React from 'react';

import '../styles/portfolio.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { bounce } from 'react-animations';


const styles = {
  bounce: {
    animation: 'x 2s',
    animationName: (bounce, 'bounce')
  }
}
 const Project = ()=> {
  return (
    <section>
<div className='container'>
      <div className='topimg'>
        <div className='imgcontainer'>
           <a href="https://obscure-stream-33374-4c4296c6212a.herokuapp.com/"><img className="test" style={styles.bounce} src= "/assets/cheatsheet.png"/></a>
         </div>
       
         <div className='imgcontainer'>
          <a href="https://99anvar99.github.io/Media-Universe/"> <img src= ".styles/assets/mediabrowser.png" /></a>
          </div>
          <div className='imgcontainer'>
          <a href="https://mk0999.github.io/almanac/"> <img src= ".styles/assets/notes.png" rounded  /></a>
          </div>
       </div>
       <div className='bottomimg'>
       <div className='imgcontainer'>
          <a href="https://mk0999.github.io/shriveled/"><img src=".styles/assets/weather.png" rounded /></a>
          </div>
          <div className='imgcontainer'>
          <a href="https://mk0999.github.io/protestation/"> <img src=".styles/assets/quiz.png" rounded  /></a>
          </div>
        </div>
    </div>
    </section>
  )
 }
 export default Project