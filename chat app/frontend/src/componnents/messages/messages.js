import React from 'react'
import "./messages.css"
import ScrollToBottom from 'react-scroll-to-bottom'
import Message from './message/message'
 
  
const Messages=({messages,name})=>{
 console.log(messages,name)
  return (
    <ScrollToBottom className="messages">
      <div>
      {messages.map((message,index)=>{
      
     return   <div key={index}> <Message name={name} message={message}/></div>
   })}
   </div>
     </ScrollToBottom>
    
  )
}
export default Messages;
