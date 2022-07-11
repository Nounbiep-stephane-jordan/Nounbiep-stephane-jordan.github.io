import React from 'react'
import line from "../../img/line.png"
import micro from "../../img/Group 2.png"
import music from "../../img/music icon.png"
import handmicro from "../../img/Group 4.png"
import "./amazing.css"
const Amazing = () => {
  return (
    <div className="second padding">
        <div className="head-img-heading">
             <div className="line-box"><img src={line}  alt="line"/></div>
            <div className="headings">
                <h1>An Amazing App Can Change Your Daily Life</h1>
                <h1>Music Experience</h1>
            </div>
        </div>

        <div className="features">
<div className="individual-feature">
 <div className="feature-box"><img src={micro} alt="micro"/></div>
<h2>For Live Music</h2>
<p className='para'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum nemo quas dolore, odit excepturi, itaque doloribus omnis expedita 
           </p>
<div className="learn-more">
<a>Learn More</a>
</div>
</div>

<div className="individual-feature">
 <div className="feature-box"><img src={music} alt="music" /></div>
<h2>For Daily Music</h2>
<p className='para'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum nemo quas dolore, odit excepturi, itaque doloribus omnis expedita 
           </p>
<div className="learn-more">
<a>Learn More</a>
</div>
</div>



<div className="individual-feature">
 <div className="feature-box"><img src={handmicro} alt="hand"/></div>
<h2>For Artist</h2>
<p className='para'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum nemo quas dolore, odit excepturi, itaque doloribus omnis expedita 
           </p>
<div className="learn-more">
<a>Learn More</a>
</div>
</div>

        </div>
    </div>
  )
}

export default Amazing