import { Button } from "bootstrap";
import React from "react";
import axios from "axios"
function Form(){

const [contactD,setContactD] = React.useState({
    name:"",
    email:"",
    message:""
})

function catchData(event) {
    const {value,name} = event.target
    setContactD((prev) =>{
         if(name === "name"  ) {
              return {
                  name:value,
                  email:prev.email,
                  message:prev.message
              }
         } else if(name==="email") {
            return {
                name:prev.name,
                email:value,
                message:prev.message
            }

         } else {
            return {
                name:prev.name,
                email:prev.email,
                message:value
            }
         }
    })
    console.log(contactD)
}

 
 
function handleClick(e){
e.preventDefault();
 
 console.log("wow");
 var url = 'http://localhost:4000/contact';
 axios.post(url,contactD)
  .then(response=>
    {
        document.querySelector(".alert-green").classList.remove("none")
      document.querySelector("#myBar-green").classList.remove("none")
    var i = 0;
    function move() {
      if (i === 0) {
        i = 1;
        var elem = document.getElementById("myBar-green");
        var width = 10;
        var id = setInterval(frame, 20);
        function frame() {
          if (width >= 100) {
            clearInterval(id);
            i = 0;
            setTimeout(()=>{
                document.querySelector(".alert-green").classList.add("none")
                document.querySelector("#myBar-green").classList.add("none") 
   },100)
          } else {
            width++;
            elem.style.width = width + "%";
             
          }
        }
      }
    }
    move();
    setContactD({
        name:"",
        email:"",
        message:""})
        console.log(response);
    }
    )
  .catch((error)=>
  { 
      document.querySelector(".alert").classList.remove("none")
      document.querySelector("#myBar").classList.remove("none")
    var i = 0;
    function move() {
      if (i === 0) {
        i = 1;
        var elem = document.getElementById("myBar");
        var width = 10;
        var id = setInterval(frame, 20);
        function frame() {
          if (width >= 100) {
            clearInterval(id);
            i = 0;
            setTimeout(()=>{
                document.querySelector(".alert").classList.add("none")
                document.querySelector("#myBar").classList.add("none") 
   },100)
          } else {
            width++;
            elem.style.width = width + "%";
             
          }
        }
      }
    }
    move();
      setContactD({
        name:"",
        email:"",
        message:""})
        console.log(error)})
}


    return (<form id="contact" onSubmit={handleClick} method="POST" action="/contact">

 <div className="form-inner">
 <input type="text" placeholder="enter your name" name="name"  value={contactD.name}  onChange={catchData} />
<input type="email" placeholder="enter your email" name="email" value={contactD.email}  onChange={catchData} />
 <textarea cols="30" rows="5" onChange={catchData} name="message"  value={contactD.message}/>
 <button className="btn btn-form btn-outline-red" type="submit" >Send a message</button>
 </div>
 
    </form>)
}

export default Form;