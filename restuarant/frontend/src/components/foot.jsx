import React from "react";
import "../footer.css"


function Footer(params) {
    return (<footer className="space">
         <section>
             <div className="foot-txt">
                 <h1>ABOUT US</h1>
                 <p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct. </p>
             </div>

             <div className="foot-txt">
                 <h1>CONTACT US</h1>
                 <p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct. </p>
                
             </div>

             <div className="foot-txt foot-form">
             <h1>Newsletter</h1>
             <p>you can trust us and sign up</p>
              <input type={"email"} placeholder={"enter your email"} />
             <button className="btn btn-outline">send</button>
             </div>
                
         </section>
         <div className="phone-row">
              <p className="phone">+58688989</p>
                 <p className="phone">+58688989</p>
         </div>
         <i className="fa-solid fa-facebook "></i>
         <i className="fa-solid fa-pinterest "></i>
         <i className="fa-solid fa-twitter "></i>
    </footer>)
}

export default Footer;