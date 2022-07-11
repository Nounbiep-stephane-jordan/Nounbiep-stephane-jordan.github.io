import React,{useState} from 'react'
import MuzicLogo from "../../img/MuzicLogo.png"
import {GiHamburgerMenu} from "react-icons/gi"
import {MdOutlineRestaurantMenu} from "react-icons/md"
import "./nav.css"
const Nav = () => {
  const [toggleMenu,setToggleMenu] = useState(false)
 
  return (
    <nav>
        <div className='imgContainer'>
            <img src={MuzicLogo}  alt="logo"/>
        </div>
        <div className='links'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Performer</li>
                <li>Event Schedule</li>
                <li>Blog</li>
            </ul>
        </div>
        <div className="registration">
                <button>Sign Up</button>
                <button>Log In</button>
            </div>
            {/* <GiHamburgerMenu className="small-size-nav" onClick={() => setToggleMenu((prev) =>!prev)}/> */}
            {/* {toggleMenu ?   <>
              <div className='imgContainer'>
            <img src={MuzicLogo}  alt="logo"/>
        </div>
        <div className='links'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Performer</li>
                <li>Event Schedule</li>
                <li>Blog</li>
            </ul>
        </div>
        <div className="registration">
                <button>Sign Up</button>
                <button>Log In</button>
            </div></>:null } */}
     </nav>
  )
}

export default Nav