import React,{useState,createContext} from 'react'
import {Link} from "react-router-dom"
import "./join.css"
 
 
 
export default function Join(props) {
  
    const [name,setName] = useState("");
    const [room,setRoom] = useState("")
 
    return (
      
<div className="joinOuterContainer">
    <div className="joinInnerContainer">
    <h1 className='heading'>Join</h1>
 
    <div><input placeholder="enter your name" className="joinInput" type="text" onChange={(event)=>{
      setName(event.target.value)}}/></div>
    <div><input placeholder="enter your room name" className="joinInput mt-20" type="text" onChange={(event)=>{setRoom(event.target.value)}}/></div>
    <Link onClick={event => (!name||!room)?event.preventDefault() :null} to={`/chat/${name}/${room}`}>
 
        <button className='button mt-20'>Sign In</button>
    </Link>
    </div>
    
    </div>
 
  )
}
