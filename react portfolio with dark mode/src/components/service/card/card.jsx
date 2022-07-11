import React from 'react'
import "./acrd.css"
const Card = (props) => {
  return (
    <div className="service-card">
    <div className="service-img"><img src={props.img}/></div>
     <div>
     <p className="black">{props.first}</p>
    <p>{props.second}</p>
    <button>Learn More</button>
     </div>
</div>
  )
}

export default Card