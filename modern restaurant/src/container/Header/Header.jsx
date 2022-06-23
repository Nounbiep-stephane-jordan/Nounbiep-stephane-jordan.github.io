import React from 'react'
import images from "../../constants/images"
import SubHeading from '../../components/SubHeading/SubHeading'
import "./Header.css"
  const Header = () => {
  return (
    <div className='app__header app__wrapper section__padding' id='home'>
      <div className='app__wrapper_info'>
        <SubHeading title="Chase the new flavour"/>
        <h1 className='app__header-h1'>The Key to fine dinning</h1>
      <p className='p__opensans' style={{margin:"2rem 0"}}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus quo repellendus voluptate totam ducimus, alias ad quod officiis praesentium excepturi laboriosam fugit non obcaecati sapiente cupiditate? Ipsam nihil mollitia praesentium!
      </p>
      <button className='custom__button' type='button'>
        Explore Menu    
      </button>
      </div>

      <div className='app__wrapper_img'>
        <img src={images.welcome} alt="welcome" />
      </div>
    </div>
  )
}


export default Header;