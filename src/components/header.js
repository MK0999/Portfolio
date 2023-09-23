import React from 'react';
import '../styles/header.css';
import { GiHamburgerMenu } from "react-icons/bs";

 const Header = ({handlePageChange})=> {
  return (
    <>
   
    <div className="navbar">
        <h2>Kiran<span>deep </span>Kaur</h2>
      <div className="nav">
      <h5><a href= "#About" onClick={()=> handlePageChange("About")}>About me</a></h5>
    <h5><a href= "#Portfolio" onClick={()=> handlePageChange("Portfolio")}> Portfolio</a></h5> 
    <h5><a href= "#Contact" onClick={()=> handlePageChange("Contact")}> Contact</a></h5>
        </div>
    </div>
    </>
  )
 }
 export default Header