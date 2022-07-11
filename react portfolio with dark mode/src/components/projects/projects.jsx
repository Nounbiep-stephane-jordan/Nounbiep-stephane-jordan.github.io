import React from 'react'
import "./projects.css"
import sidebar from "../../img/sidebar.png"
import ecommerce from "../../img/ecommerce.png"
import music from "../../img/musicapp.png"
import hoc from "../../img/hoc.png"
function Projects({darkmode}) {
    const styles={
        color:darkmode?"white":null
     }
  return (
    <div className="portfolio padd" id="portfolio">
        <div  className="projects-text">
            <span style={styles}>Recent Projects</span>
            <span>Portfolio</span>
        </div>
        <div className="projects-images">
            <div className="project-img">
                <img src={sidebar}/>
            </div>
            <div className="project-img">
                <img src={ecommerce}/>
            </div>
            <div className="project-img">
                <img src={music}/>
            </div>
            <div className="project-img">
                <img src={hoc}/>
            </div>
        </div>
    </div>
  )
}

export default Projects