import React from "react";
 

function Chef(){





   


    return(<section id="chef" className="chef-main space none">
    <div className="chef-title">
        <h1>MEET OUR QUALIFIED CHEF</h1>
        <p>who are in love with echo system</p>
    </div>
    <div className="chef-row">
     
        <img src={process.env.PUBLIC_URL+"images/xt1.jpg.pagespeed.ic.qX1rtRc1Gw.webp"}/>
 
    
        <img src={process.env.PUBLIC_URL+"images/xt2.jpg.pagespeed.ic.rNbYD-7Vni.webp"}/>
      
     
        <img src={process.env.PUBLIC_URL+"images/xt3.jpg.pagespeed.ic.hgrhnPVH61.webp"}/>
     
    
        <img src={process.env.PUBLIC_URL+"images/xt4.jpg.pagespeed.ic.pO1rXfLDtc.webp"}/>
   
    </div>
    </section>)
}

export default Chef;