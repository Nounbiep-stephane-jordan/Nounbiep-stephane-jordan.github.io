import React from 'react';
import { useState } from 'react';
import "../head.css"


const Head = () => {
const [color, setColor] = useState(false);


const changeBackground = ()=>{
  if(window.scrollY >= 30) {
      setColor(true)
  } else {
      setColor(false)
  }
}

window.addEventListener("scroll",changeBackground)

const display = ()=>{
    document.querySelector(".none").classList.remove("none");
}



    return (
        <header className={color ?"nav-black":null}>
            <nav>
            <div className='logo'>
             <img alt='logo' src={process.env.PUBLIC_URL+"images/logo.png.webp"} />
            </div>
                 <div className='left-nav'>
                 <a href='#home'  className={color ? "a-black":"active"}>Home</a>
                <a  href='#dish' className={color ? "a-black":null}>Dish</a>
                <a href='#chef'  className={color ? "a-black":null} onClick={display}>Chefs</a>
                <a href='#blog'  className={color ? "a-black":null}>Blog</a>
                <a href='#contact'  className={color ? "a-black":null}>Contact</a></div>
            </nav>
        </header>
    );
}

export default Head;
