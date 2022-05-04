import React from "react"
import "../body.css"
import Map from "./map";
import MainBox from "../main-box"
import TopRated from "./top-rated";
import Video from "./video";
import Features from "./features";
import Slide from "./slide";
import Chef from "./chef";
import Blog from "./blogs";
import Form from "./form";



function Body(params) {
 
    return (<main  >
        <MainBox />
       <TopRated/>
        <Video/>
       <Features/>
       <Slide/>
 
 <hr />
  
  <Chef/>
  <Blog/> 
 
         <section className="space map-form">
 <div className="message">    
      <div id="myProgress none">
  <div id="myBar" className="none"></div>
</div>
<div class="alert none">
<p>Sorry an error occured try again!</p>
</div></div>
 <div className="message">    
      <div id="myProgress-green none">
  <div id="myBar-green" className="none"></div>
</div>
<div class="alert-green none">
<p>Message sent succesfully thanks!</p>
</div></div>
         <Map />
         <Form/>
         </section>
    
    </main>)
}

export default Body;
