import React from 'react'
import SubHeading from '../../components/SubHeading/SubHeading'
import images from '../../constants/images'
 
import "./chef.css"
const Chef = () => {
  return (
    <div className='app__bg app__wrapper section__padding'>
        <div className="app__wrapper_img app__wrapper_img-reverse">
            <img src={images.chef} alt="chef" />
        </div>

        <div className='app__wrapper_info'>
            <SubHeading title="Chef's Word"/>
            <h1 className='headtext__cormorant'>What We Believe In</h1>
        
        <div className='app__chef-content'>
            <div className='app__chef-content_quote'>
                <img src={images.quote} alt="quote" />
           <p className='p__opensans'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum nemo quas dolore, odit excepturi, itaque doloribus omnis expedita 
           </p>
            </div>
            <p className='p__opensans'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum nemo quas dolore, odit excepturi, itaque doloribus omnis expedita
            , consectetur adipisicing elit. Dolorum nemo quas dolore, odit excepturi, itaque doloribus omnis expedita
           </p>
        </div>

      <div className='app__chef-sign'>
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef & Founder</p>
      <img src={images.sign} alt="sign" />
      </div>

        </div>
    </div>
  )
}

export default Chef;