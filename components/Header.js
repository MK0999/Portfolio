import { GiHamburgerMenu } from "react-icons/bs";
 const Header = ()=> {
  return (
    <>
   
    <div className="navbar">
        <h2>Kiran<span>deep </span>Kaur</h2>
      <div className="nav">
      <h5><Link href= "/About">About me</Link></h5>
    <h5><Link href= "/Portfolio"> Portfolio</Link></h5> 
    <h5><Link href= "/Contact"> Contact</Link></h5>
        </div>
    </div>
    </>
  )
 }
 export default Header