import React from 'react'
import line from "../../img/line.png"
import rectangle from "../../img/Rectangle 7.png"
import phonethird from "../../img/d1.png"
import play from "../../img/d4.png"
import girl from "../../img/d2.png"
import singer from "../../img/d3.png"
import search from "../../img/search.png"
import moon from "../../img/Mask Group 23.png"
import playing from "../../img/Group 9.png"
import playPause from "../../img/Group 8.svg"
import small from "../../img/small.png"
import "./search.css"
const  SearchSection = () => {
   

  return (
    <div className="third rect">
       
        <div className="left-third"> 
             <div className="third-phone"><img src={ phonethird}/></div>
             <div className="girl"><img src={girl}/></div>
             <div className="singer"><img src={singer}/></div>
             <div className="play-third"><img src={play}/></div>
        </div>
 
        <div className="right-third">
            <div className="search-input">
                <input placeholder='enter keywords or url' type="text"/>
                <button><div></div> </button>
            </div>
            <div className="text-search">
             <div className="line-box"><img src={line}  alt="line"/></div>
            <h2>Search Music by</h2>
            <h1>Name or Direct URL</h1>
            <p className='para'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum nemo quas dolore, odit excepturi, itaque doloribus omnis expedita 
           </p>
           <div className="search-img">
             <div className="text-img">
                 <div className="moon"><img src={moon} /></div>
                <div className="text-img-text">
                <h1>Tristam Bone Dry </h1>
                <p>Unknown Artist</p>
                </div>
            
                </div>
                <div>
                     <div className="flex">
                     <span>2:30</span>
                   <div className="playing">  <img src={playing} /></div>
                   <span>4:30</span>
                   <div className="flex-forward"> <img src={playPause}/></div>
                     <div className="control">
                     {/* <img src={small}/> */}
                      </div>
                     <div className="flex-forward rotate"> 
                     <img src={playPause}/>
                     </div>

                     </div>
                   
                </div>
           </div>
            </div>
        </div>
    </div>
  )
}

export default  SearchSection