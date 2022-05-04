import React from 'react'
import "./input.css"
export default function Input({message,setMessage,sendMessage}) {
  return (
 <form className='form'>
<input 
className='input'
type="test"
placeholder='type a message...'
value = {message}
onChange={(event)=>{
   setMessage(event.target.value)
}}
onKeyDown={event => event.key === "Enter"?sendMessage(event):null}
/>
<button className='sendButton' onClick={(event)=>{
    sendMessage(event)
}}>Send</button>
 </form>
  )
}
