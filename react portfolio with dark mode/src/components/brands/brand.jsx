import React from 'react'
import amazon from "../../img/amazon.png"
import upwork from "../../img/Upwork.png"
import Shopify from "../../img/Shopify.png"
import Facebook from "../../img/Facebook.png"
import fiver from "../../img/fiverr.png"
import "./brand.css"
import { useInViewport } from '../inview'
import { useRef } from 'react'

const Brand = ({darkmode}) => {
  const styles={
    color:darkmode?"white":null
 }

 const ref = useRef(null)
   const isInView = useInViewport(ref)


  return (
    <div className="brand padd">
        <div className="brand-left">
            <span style={styles}>Works for All these</span>
            <span>Brands & Clients</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eveniet dolores dolor neque aliquam asperiores quos quisquam, reiciendis laboriosam itaque ad delectus! Aperiam officiis  </p>
        <button className="btn">Hire me</button>
        <div className="blur s-blur" style={{background:"#DDF8FE"}}></div>
        </div>
        <div className="brand-right">
            <div className="circle" ref={ref} style={isInView?{animation:"rotate",animationDelay:"2s",animationTimingFunction:"0.5s",animationDuration:"8s",animationFillMode:"backwards",animationIterationCount:"infinite"}:null}>
            <div className="upwork s-circle"  ref={ref} style={isInView?{animation:"rotate",animationDelay:"2s",animationTimingFunction:"0.5s",animationDuration:"8s",animationFillMode:"backwards",animationIterationCount:"infinite"}:null} ><img src={upwork} /></div>
            <div className="amazon s-circle"  ref={ref} style={isInView?{animation:"rotate",animationDelay:"2s",animationTimingFunction:"0.5s",animationDuration:"8s",animationFillMode:"backwards",animationIterationCount:"infinite"}:null}><img src={amazon} /></div>
            <div className="fiver s-circle"  ref={ref} style={isInView?{animation:"rotate",animationDelay:"2s",animationTimingFunction:"0.5s",animationDuration:"8s",animationFillMode:"backwards",animationIterationCount:"infinite"}:null}><img src={fiver} /></div>
            <div className="facebook s-circle"  ref={ref} style={isInView?{animation:"rotate",animationDelay:"2s",animationTimingFunction:"0.5s",animationDuration:"8s",animationFillMode:"backwards",animationIterationCount:"infinite"}:null}><img src={Facebook} /></div>
            <div className="shopify s-circle"  ref={ref} style={isInView?{animation:"rotate",animationDelay:"2s",animationTimingFunction:"0.5s",animationDuration:"8s",animationFillMode:"backwards",animationIterationCount:"infinite"}:null}><img src={Shopify} /></div>
            </div>
            <div className="blue-circle"></div>
            <div className="yellow-circle"></div>
        </div>
    </div>
  )
}

export default Brand