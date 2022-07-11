import React from 'react'
import heart from "../../img/heartemoji.png"
import glasses from "../../img/glasses.png"
import humble from "../../img/humble.png"
import "./service.css"
import Card from './card/card'
import { useInViewport } from '../inview'
import { useRef } from 'react'



const Service = ({darkmode}) => {
   const styles={
      color:darkmode?"white":null
   }
   const ref = useRef(null)
   const isInView = useInViewport(ref)
  return (
    <div className="service padd" id="service">
        <div className="service-text">
            <span style={styles}>My Awesome</span>
            <span>Services</span>
            <p>I have for slogant of always making the clients satified by offering hte best possible quality service at friendly price</p>
        <button className="btn">Download CV</button>
        <div className="blur s-blur" style={{background:"#DDF8FE"}}></div>
         
        <div className="blur p-blur" style={{backgraound:"#ABF1FF94"}}></div>
        </div>
        
       <div className="all-cards">
     <div className="first" ref={ref} style={isInView?{animation:"slidecard1",animationDelay:"1s",animationTimingFunction:"ease",animationDuration:"1s",animationFillMode:"forwards"}:null} >
     <Card 
        img={heart} 
        first="Design" 
        second="Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"
        />

     </div>

     <div className="second" ref={ref} style={isInView?{animation:"slidecard2",animationDelay:"2s",animationTimingFunction:"ease",animationDuration:"1s",animationFillMode:"forwards"}:null}>
     <Card 
        img={glasses} 
        first="Web Dev" 
        second="Html , Css, javascript, Reactjs, Node & Express"
        />

     </div>

     <div className="third" ref={ref} style={isInView?{animation:"slidecard3",animationDelay:"3s",animationTimingFunction:"ease",animationDuration:"1s",animationFillMode:"forwards"}:null}>
     <Card 
        img={humble} 
        first="App Dev" 
        second="Great experience for cross plateform mobile development using React native"
        />
     </div>
 
       </div>
    </div>
  )
}

export default Service