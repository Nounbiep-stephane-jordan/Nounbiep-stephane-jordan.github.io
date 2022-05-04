import React ,{useEffect,useState } from 'react';
 import  {useParams}from "react-router-dom"
 import "./chat.css"
import io from "socket.io-client";
import InfoBar from '../infobar/infoBar';
import Input from '../input/input';
 import Messages from "../messages/messages"
let socket;

 
export default function Chat(props) {
 
  const [names,setNames] = useState("");
  const [rooms,setRooms] = useState("")
  const [message,setMessage] = useState("");
  const [messages,setMessages] = useState([]);

  const ENDPOINT = "http://localhost:5000"
 
const {name,room} = useParams()

useEffect(()=>{
  

socket=io(ENDPOINT);


setNames(name);
setRooms(room);
console.log(socket)

socket.emit("join",{name,room},()=>{});

return ()=>{
  socket.on("disconnect",()=>{
    console.log(socket.id)
  });
  socket.off();
}

},[ENDPOINT,useParams])


useEffect(()=>{  //for handleling messages
  socket.on("message",(message)=>{
    setMessages([...messages,message])
      
  },[messages])

})

//function for sending messages
const sendMessage = (event)=>{
  event.preventDefault()
  console.log("the message is",message)
  if(message){
    socket.emit("sendMessage",message,()=>setMessage(""))
  }
}


console.log(message,messages)
  return (
    <div className='outerContainer'>
<div className='container'>
<InfoBar
  room={room}
/>
<Messages 
name={name}
messages={messages}/>
 <Input
message={message}
setMessage={setMessage}
sendMessage={sendMessage}

 />

 
</div>
    </div>
  )
}
