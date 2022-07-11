import React from 'react'
import {BsFacebook,BsTwitter,BsYoutube,BsLinkedin} from "react-icons/bs"
 

import "./foot.css"
const Foot = () => {
  return (
    <div className="foot">
          <div className='link'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Performer</li>
                <li>Event Schedule</li>
                <li>Blog</li>
            </ul>
        </div>
        <div className="icons">
        <BsFacebook className="icon"  /> 
          <BsTwitter className="icon"/>
          <BsYoutube className="icon"/>
          <BsLinkedin className="icon"/>
        </div>
        <div className="foot-para">
       <p>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        </p>
        </div>
    </div>
  )
}

export default Foot