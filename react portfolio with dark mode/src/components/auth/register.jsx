import axios from "axios";
import React, {  useState } from "react";
import Fileupload from "./fileupload";
 
export default function Register() {
  

    const [error,setError] = useState({
         value:""
    })
    const [sucess,setsucess] = useState({
        value:""
   })
    const  [data,setData] = useState({
        nickname:"",
        password:"",
        profileImage:""
    })
 
    const [file, setFile] = useState();
   
    function handleclick(event) {
        
        
 
        const formData = new FormData()
        formData.append("profileImage",file) //very important that the name profileimage is the same as that on the input name ,in multer.single name
  
        for (var key of formData.entries()) {
            console.log(key[0] + ', ' + key[1]);
        }
         console.log("wow",data,file)
 
            axios.post("http://localhost:4000/register",data )
            .then(response =>{
                if (response.data.error) {
                    console.log("an error occured")
                   setError({value:response.data.error})
                } else {
                    setsucess({value:response.data.sucess})
                }
                console.log(response.data,"is data")
            })
            .catch(err =>{
                console.log(err)
            })
        
        
        event.preventDefault()
    }

    function handleChange(event) {
         let {value,name}= event.target
         if (name==="profileImage") {
             let img = event.target.files[0]
            setFile(img);
            
            console.log(img,event.target.files[0])
         }
      setData((previous) =>{
                if (name === "nickname") {
                    return {
                        nickname:value,
                        password:previous.password,
                        profileImage:previous.profileImage
                    }
                     
                } else if (name === "password") {
                    return {
                        nickname:previous.nickname,
                        password:value,
                        profileImage:previous.profileImage
                    }
                } else {
                    return {
                        nickname:previous.nickname,
                        password:previous.password,
                        profileImage:value
                    }
                }
            })
        
    }

 
  return (
      <>
      {sucess.value ?  <div>
          {sucess.value}
          <div>
              <Fileupload nickname={sucess.value}  />
          </div>
      </div>  :  <div>
        <div>{error.value}</div>
        <form action="register"  method="post" encType="multipart/form-data" onSubmit={handleclick}>
            nickname:
            <input type="text" name="nickname" onChange={handleChange} value={data.nickname} /> <br />
            password:
            <input type="password" name="password" onChange={handleChange} value={data.password} /> <br />          
            <button type="submit" >Register</button>
            {/* <div>{sucess.value}</div> */}
        </form>
    </div>}
      </>
     
  )
}
