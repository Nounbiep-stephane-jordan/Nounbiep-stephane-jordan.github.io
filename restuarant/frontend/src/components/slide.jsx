import React from "react";

function Slide(){

  

    return(
        <section className="slider-main space">
       <div className="slider-txt container-fluid">
           <h1>OUR FEATURED FOOD MENU</h1>
           <p>We are in love with echo family sytem</p>
       </div>
       <div className="slider">
       <div className="slider-left">
           <h1>Fresh & cripsy all time</h1>
           <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id dolorum quo labore voluptate saepe. Soluta unde harum eius necessitatibus optio cum placeat rem, quas libero veritatis distinctio eos consequuntur eum?</p>
           <button className="btn btn-outline-red">VIEW FULL MENU</button>
       </div>
       <div className="slider-right">
       <div className="slide">  <img src={process.env.PUBLIC_URL+"images/slider1.jpg.webp"} /> </div>
       
       <div className="slide">  <img src={process.env.PUBLIC_URL+"images/slider1.jpg.webp"} /> </div>
       </div>
       </div>
       
        </section>
       )
}

export default Slide;