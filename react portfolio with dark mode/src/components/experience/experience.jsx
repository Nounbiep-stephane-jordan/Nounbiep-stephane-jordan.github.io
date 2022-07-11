import React from 'react'
import "./exp.css"
import CardExp from './cardExp'
const Experience = ({darkmode}) => {
 
  return (
    <div className="exp padd" id="exp">
      <CardExp darkmode={darkmode}  title="8+" text1="Years" text2="Experience" />
      <CardExp darkmode={darkmode} title="20+" text1="completed" text2="Projects" />
      <CardExp darkmode={darkmode} title="5+" text1="companies" text2="Work" />
    </div>
  )
}

export default Experience