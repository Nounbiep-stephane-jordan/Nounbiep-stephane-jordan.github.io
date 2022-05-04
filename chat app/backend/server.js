const express = require("express");
const http = require('http');
const cors = require("cors")

const {addUser,removeUser,getUser,getUsersInRoom, getall} = require("./users")



const PORT = process.env.PORT || 5000

const router = require("./router")

const app = express();
const server = http.createServer(app);
 
const io = require("socket.io")(server,{
    cors:{
      origin:"http://localhost:3000",
      methods:["GET","POST"],
      allowedHeaders:["my-custom-header"],
      credentials:true
    }
  });


app.use(router)
 

io.on("connection",(socket)=>{
    console.log("we have a new connection",socket);
    console.log("socket is active");

socket.on("join",({name,room},callback)=>{
   console.log(name,room)
    const {error ,user} = addUser({id:socket.id,name,room})
 console.log(user,"socketid",socket.id)
 console.log(getall())
    if(error) return callback(error)
    socket.join(user.room);
    socket.emit("message",{user:"admin",text:`${user.name},welcome to the room ${user.room} `})

    
    socket.broadcast.to(user.room).emit("message",{user:"admin",text:`${user.name},has joined `})

    io.to(user.room).emit("roomData",{room:user.room,users:getUsersInRoom(user.room)})

    callback()
      
})

socket.on("sendMessage",(message,callback )=>{
const user = getUser(socket.id)
 
 
io.to(user.room).emit("message",{user:user.name,text:message})
io.to(user.room).emit("roomData",{user:user.room,users:getUsersInRoom(user.room)})

callback() //use to do something after the event on the frontend

})


    socket.on("disconnect",()=>{
    const user = removeUser(socket.id)
    if(user){
        io.to(user.room).emit("message",{user:"admin",text:`${user.name} has left`})
    }
        console.log("user has left")
    })
})





server.listen(PORT,()=>{
    console.log("server running on "+PORT+"...")
})