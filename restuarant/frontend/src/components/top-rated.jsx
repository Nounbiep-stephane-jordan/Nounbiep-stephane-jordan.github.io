import React from "react"

function TopRated(){
    return(
 
        <section id="dish" className="top-rated container">
         <div className="top-title">
             <h1 className="top-h1">OUR TOP RATED FOOD</h1>
             <p className="top-first-p">Who are in extremely love with eco friendly system.</p>
         </div>
   
      <div className="row-img">
       <div className="food-card">
   <img src={process.env.PUBLIC_URL+"images/d1.jpg.webp"} />
   <div className="food-card-txt">
       <h1 className="food-card-txt-h1">Bread Fruit Cheese Sandwich</h1>
       <p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct. </p>
   </div>
       </div>
       
       <div className="food-card">
   <img src={process.env.PUBLIC_URL+"images/d2.jpg.webp"} />
   <div className="food-card-txt">
       <h1 className="food-card-txt-h1">Bread Fruit Cheese Sandwich</h1>
       <p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct. </p>
   </div>
       </div>
   
       <div className="food-card">
   <img src={process.env.PUBLIC_URL+"images/d3.jpg.webp"}  />
   <div className="food-card-txt">
       <h1 className="food-card-txt-h1">Bread Fruit Cheese Sandwich</h1>
       <p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct. </p>
   </div>
       </div>
   
      </div>
   
        </section>)
}

export default TopRated;