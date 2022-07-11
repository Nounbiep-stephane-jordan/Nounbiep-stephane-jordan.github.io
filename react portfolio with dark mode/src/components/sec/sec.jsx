import React from 'react'
import {BsGithub,BsLinkedin,BsInstagram} from "react-icons/bs"
import "./sec.css"
import orange from "../../img/Vector2.png"
import emoji from "../../img/glassesimoji.png"
import crown from "../../img/crown.png"
import thumbup from "../../img/thumbup.png"
import boy from "../../img/boy.png"
import me from "../../img/boy.png"
 
import { useRef } from 'react'
import { useInViewport } from '../inview'
 

const Section1 = ({darkmode}) => {

   const styles = {
      color:darkmode?"white":null
   }

   const ref = useRef(null)
   const isInView = useInViewport(ref)
   console.log("isinview",isInView)
  return (
    <div className="section-1 padd">
 <div className="left">
 <div className="section-1-text">
 <h1 style={styles}>Hy! I Am</h1>
    <h1>Stephane Jordan</h1>
    <p>Frontend Developer with high level of experience in web design and development
      producing quality work
    </p>
 </div>
    <div>
    <button className="btn">Hire me</button>
    </div>
    <div className="links-icon">
 <div className="icon">
 <BsGithub/>
 </div>
<div className="icon">
<BsLinkedin/>
</div>
<div className="icon">
<BsInstagram/>
</div>
    </div>
 </div>

 <div className="right">
<div className="emoji-glass " ref={ref} style={isInView?{left:"-20px",top: "-100px"}:null}>
<img src={emoji}/>
</div>
<div className="crown" ref={ref} style={isInView?{right:"50px"}:null} >
 <div className="crown-img"><img src={crown}/></div>
<p>Full stack web Developer</p>
</div>
<div className="orange-shape">
<img src={orange}/>
</div>
 
<div className="boy" id="boy">
   
</div>
<div className="boy-img">
   <img src={me} alt="" />
</div>
 <div className="thumbup" ref={ref} style={isInView?{left:"20px"}:null}>
 <div className="thumbup-img"><img src={thumbup}/></div>
   <p>Mobile app development</p>
 </div>
<div className="blur" style={{background:"rgb(238,210,255)"}}>
</div> 
<div className="blur"
style={{
   background:"#DDF8FE",
   top:"17rem",
   width:"21rem",
   height:"11rem",
   left:"-9rem"
}}
>

</div>
 </div>
           </div>
  )
}

export default Section1