import React from 'react'
import {BsInstagram,BsArrowLeftShort,BsArrowRightShort} from "react-icons/bs"
import SubHeading from '../../components/SubHeading/SubHeading'
import images from "../../constants/images"
 import "./gallery.css"
const  Gallery = () => {
    const scrollRef = React.useRef(null)
    const scroll = (direction) => {
        const {current} = scrollRef
        
        if(direction == "left") {
            current.scrollLeft -= 300
            console.log("left")

        } else {
            current.scrollRight += 500
            console.log("right")
        } 
    }

    const galleryimages = [images.gallery01,images.gallery02,images.gallery03,images.gallery04]
  return (
    <div className='app__gallery flex__center'> 
    <div className='app__gallery-content'>
        <SubHeading title="Instagram" />
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
    <p className='p__opensans' style={{color:"#AAA",marginTop:"2rem"}}>
    Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Dolorum Nemo Quas Dolore, Odit Excepturi, Itaque Doloribus Omnis Expedita , Consectetur
    </p>
    <button type='button' className='custom__button'>View More</button>
    </div>

    <div className='app__gallery-images'>
        <div className='app__gallery-images_container' ref={scrollRef}>
      {galleryimages.map((image,index) => (
          <div className='app__gallery-images_card flex__center' key={index}   >
                     <img src={image} alt="gallery image" />
                    <BsInstagram className='gallery__image-icon'/>
                 </div>
      ))}
        </div>
        <div className='app__gallery-images_arrows'>
            <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll("left")}/>
            <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll("right")}/>

        </div>
    </div>
    </div>
  )
}

export default  Gallery