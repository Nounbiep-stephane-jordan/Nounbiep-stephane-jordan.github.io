import React, { useEffect, useState } from 'react'
import {BsMoon} from "react-icons/bs"
import { FaBars } from "react-icons/fa";

import "./nav.css"
const Nav = ({darkmode,setDarkmode}) => {

   const styles = {
      color:darkmode?"white":null
   }
  

   const [isMobile,setIsmobile] = useState(false)
const handleResize = () => {
   if(window.innerWidth<600) {
      setIsmobile(true)
   } else {
      setIsmobile(false)
   }
}

useEffect(()=>{
   window.addEventListener("resize",handleResize)
},[isMobile])



 

  return (
 <>
 {isMobile?  

 <>
  
  <nav className="padd" >
         <div className="name">
            <p style={styles}>Noubiep</p>
 <div>
 <label className="switch"    >
    <BsMoon className="moon" onClick={() => {setDarkmode((prev) => !prev)}}/>
  <input type="checkbox"  />
  <span className="slider round"></span>
</label>
 </div>
        </div>
        <div className="links">
        <button className="btn btn-orange">contact</button>      
        </div>

    
        
     </nav>
 </>
 

 :
      <nav className="padd">
         <div className="name">
            <p style={styles}>Noubiep</p>
 <div>
  <div >
  <label className="switch"   >
    <BsMoon  onClick={() => {setDarkmode((prev) => !prev)}} className="moon"/>
  <input type="checkbox" />
  <span className="slider round"  ></span>
</label>
  </div>
 </div>
        </div>
        <div className="links">
             <div className="all-links">
             <ul>
                 <li><a style={styles} href="#home">Home</a></li>
                <li> <a style={styles} href="#service">Services</a></li>
              <li>   <a style={styles} href="#exp">Experience</a></li>
                 <li><a style={styles} href="#portfolio">Portfolio</a></li>
               <li>  <a style={styles} href="#testimonial">Testimonial</a></li>
            </ul>   
                </div> 
        <button className="btn btn-orange">contact</button>      
        </div>
    
        
     </nav>}
 </>
  )
}

export default Nav