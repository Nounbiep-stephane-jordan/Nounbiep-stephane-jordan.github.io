import React from 'react'
import Nav from '../nav/nav'
import phone from "../../img/p 1.png"
import playstore from "../../img/Google Play.png"
import appstore from "../../img/App Store.png"
import bg from "../../img/backgraphics.png"
import play from "../../img/p 2.png"
import box from "../../img/p 3.png"
import heart from "../../img/p 4.png"

import "./section.css"
const  Section = () => {
  return (
    <div className="bg"> 
 <Nav/>
 <div className="first padding">

 <div className="left">

 <div className="text">
 <h2>Experience The </h2>
<h1>Best Quality Music</h1>
<p className='para'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum nemo quas dolore, odit excepturi, itaque doloribus omnis expedita 
           </p>
 </div>

<div className="store">
<p>Download now on IOS and Andriod</p>
<img className="img2" src={playstore}/>
<img src={appstore}/>
 
</div>

 </div>

 <div className="phone right">
 <div className="graphic">
 {/* <img src={bg}   alt="bg" /> */}
</div>   
  <div className="phone-img-box">
  <img className="phone-img" src={phone} alt="phone" />
  <div className="play"> <img   src={play} alt="play"/></div>
  <div className="box-heart"> 
  <img   src={box} alt="box"/>
  <div className="heart">
  <img   src={heart} alt="heart"/>
  </div>
  </div>
  </div>
 </div>
 </div>
    </div>
  )
}

export default  Section