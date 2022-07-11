import React from 'react'
import playstore from "../../img/Google Play.png"
import appstore from "../../img/App Store.png"
import line from "../../img/line.png"

import "./downsec.css"
const DownloadSection = () => {
  return (
    <div className="download">
             <div className="line-box"><img src={line}  alt="line"/></div>
        <h1>Download The Best Music</h1>
        <h1>App Now</h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        </p>
        <div className="store">
<img className="img2" src={playstore}/>
<img src={appstore}/>
 
</div>
    </div>
  )
}

export default DownloadSection