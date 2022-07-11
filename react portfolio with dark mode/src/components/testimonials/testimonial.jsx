import React from 'react'
import Profile1 from "../../img/profile1.jpg"
import Profile2 from "../../img/profile2.jpg"
import Profile3 from "../../img/profile3.jpg"
import Profile4 from "../../img/profile4.jpg"
import Slider from "react-slick";
 import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testi.css"
function Testimonial({darkmode}) {
    const styles={
        color:darkmode?"white":null
     }
    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        speed:500,
        dots:true
       
      }; 

  return (
    <div className="testimonial padd" id="testimonial">
        <h1 style={styles}>Clients always get <span>Exceptional Work</span> from me...</h1>
        <div className="blur t-blur1" style={{background:"var(--purple)"}}></div>
        <div className="blur t-blur2" style={{background:"skyblue"}}></div>
        <Slider {...settings}>
        <div className="test-box">
            <div className="test-img">
                <img src={Profile1} />
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur cumque, optio itaque harum unde eligendi architecto iusto sunt odit minus deserunt obcaecati enim praesentium veritatis consectetur sint corrupti at cupiditate!</p>
        </div>
        <div className="test-box">
            <div className="test-img">
                <img src={Profile2} />
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur cumque, optio itaque harum unde eligendi architecto iusto sunt odit minus deserunt obcaecati enim praesentium veritatis consectetur sint corrupti at cupiditate!</p>
        </div>
        <div className="test-box">
            <div className="test-img">
                <img src={Profile3} />
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur cumque, optio itaque harum unde eligendi architecto iusto sunt odit minus deserunt obcaecati enim praesentium veritatis consectetur sint corrupti at cupiditate!</p>
        </div>
        <div className="test-box">
            <div className="test-img">
                <img src={Profile4} />
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur cumque, optio itaque harum unde eligendi architecto iusto sunt odit minus deserunt obcaecati enim praesentium veritatis consectetur sint corrupti at cupiditate!</p>
        </div>
        
        </Slider>
    </div>
  )
}

export default Testimonial