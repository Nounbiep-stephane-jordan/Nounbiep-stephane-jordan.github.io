 import React from 'react'
 import Navbar from './components/Navbar/Navbar'
import Header from './container/Header/Header'
import About from './container/AboutUs/About'
import SpecialMenu from './container/Menu/SpecialMenu'
import Chef from './container/Chef/chef'
import Laurels from './container/Laurels/laurels'
 import "./App.css"
import Intro from './container/Intro/intro'
import Gallery from './container/Gallery/gallery'
import Findus from './container/Findus/findus'
import Footer from './container/Footer/Footer'
 export const App = () => {
   return (
     <>
       <Navbar/>
      <Header/>
      <About/>
      <SpecialMenu/>
      <Chef/>
      <Intro/>
      <Laurels/>
      <Gallery/>
      <Findus/>
      <Footer/>
      </>
   )
 }
 