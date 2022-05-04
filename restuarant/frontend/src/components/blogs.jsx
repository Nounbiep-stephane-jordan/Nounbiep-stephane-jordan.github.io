import React from "react";

function Blog(){
    return(<section id="blog" className="space">
    <div className="chef-title">
        <h1>Latest From Our Blog</h1>
        <p>who are in love with echo system</p>
    </div>
    <div className="blog-row">
    
    <div className="blog-cart">
    <img src={process.env.PUBLIC_URL+"images/b1.jpg.webp"}/>
    <div className="blog-txt">
    <span>10 FEB 2018</span>
    <h1>Cooking perfect fried rice in minutes</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae vero, amet dignissimos quod fugiat  </p>
     
    </div>
    </div>
    
    <div className="blog-cart">
    <img src={process.env.PUBLIC_URL+"images/b2.jpg.webp"}/>
    <div className="blog-txt">
    <span>10 MAR 2018</span>
    <h1>Cooking perfect fried rice in minutes</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae vero, amet dignissimos quod fugiat  </p>
    </div>
    </div>
    
    <div className="blog-cart">
    <img src={process.env.PUBLIC_URL+"images/b3.jpg.webp"}/>
    <div className="blog-txt">
    <span>10 APR 2018</span>
    <h1>Cooking perfect fried rice in minutes</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae vero, amet dignissimos quod fugiat  </p>
    </div>
    </div>
    
    <div className="blog-cart">
    <img src={process.env.PUBLIC_URL+"images/b4.jpg.webp"}/>
    <div className="blog-txt">
    <span>10 JAN 2018</span>
    <h1>Cooking perfect fried rice in minutes</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae vero, amet dignissimos quod fugiat  </p>
    </div>
    </div>
    
    
    
    
    </div>
    
    
    </section>
    )
}

export default Blog;