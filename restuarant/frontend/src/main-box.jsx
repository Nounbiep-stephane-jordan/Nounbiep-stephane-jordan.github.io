import React from "react";

function MainBox(){
    return (  <div className="main-box">
    <section className="main-box-img">
   <img className="main-img" src={process.env.PUBLIC_URL+"images/header-bg.jpg.webp"}/>

<section className="main-txt">
  <p className="second-txt">WIDE OPTIONS OF CHOICE</p>
  <h1 className="first-txt">Delicious Receipes </h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp
or incididunt ut labore et dolore magna aliqua. Ut enim ad minim</p>
<button className="btn btn-outline">CHECK OUR MENU</button>
</section>
</section>   
</div>)
}

export default MainBox;