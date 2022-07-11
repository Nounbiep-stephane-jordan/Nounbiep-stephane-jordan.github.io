import axios from "axios";
import React, { useState,useEffect } from "react";
 
export default function Login() {
    const [preview,setPreview] = useState({
        value:""
    })

    const [imgData,setImgdata] = useState()
   
    const [sucess,setsucess] = useState({
        value:""
   })
    const [error,setError] = useState({
         value:""
    })
    const  [data,setData] = useState({
        nickname:"",
        password:"",
    })
    function handleclick(event) {
        console.log(data)
       console.log("wow")
            axios.post("http://localhost:4000/login",data)
            .then(response =>{
                if (response.data.error) {
                    console.log("an error occured")
                   setError({value:response.data.error})
                } else {
                    setsucess({value:response.data.sucess})
                    setPreview({value:response.data.img})
                }
                console.log(response.data,"is data")
            })
            .catch(err =>{
                console.log()
            })
        
        
        event.preventDefault()
    }

    function handleChange(event) {
         const {value,name}= event.target
            setData((previous) =>{
                if (name === "nickname") {
                    return {
                        nickname:value,
                        password:previous.password
                    }
                     
                } else if (name === "password") {
                    return {
                        nickname:previous.nickname,
                        password:value
                    }
                } 
            })
        
    }
    
    useEffect(()=>{
        function findfile(id) {
            console.log(id,preview.value)
            axios.get(`http://localhost:4000/image/${id}`,{method:"Get",responseType:"blob"}).then(res =>{
                // console.log(res)
                setImgdata(res.data)
                console.log(res.data,"in find file")
                
            }).catch(err =>{
                console.log(err,"an error occured")
            })
        }
    },[preview])
  

function test(imgData) {
    
    var reader = new FileReader();
    reader.readAsDataURL(imgData);
    reader.onloadend = function () {
    var base64String = reader.result;
    console.log('Base64 String - ', base64String);
      base64String.substr(base64String.indexOf(',') + 1)
  return base64String;
}

}
 
let [base64String,setBase64] = useState() ;
if(imgData ) {
    const result =  test(imgData)
    setBase64(result)
} 




  return (
     <>
     {sucess.value ? <div> {findfile(preview.value)} {sucess.value} <div>
  
     <img src={`${base64String}`} alt="not working" />
         {/* {imgData.map((singledata) =>{
             const base64Sting = btoa(
                 String.fromCharCode(...new Uint8Array((singledata.img.data.data)))
             )
            return  <img src={`data:image/png;base64,${base64Sting}`} alt="" />
         })}
         */}
        
         </div></div>:<div>
        <div>{error.value}</div>
        <form action="/login" method="post" encType="multipart/form-data" onSubmit={handleclick}>
            nickname:
            <input type="text" name="nickname" onChange={handleChange} value={data.nickname} /> <br />
            password:
            <input type="password" name="password" onChange={handleChange} value={data.password} /> <br />
           
            <button type="submit" >Login</button>
        </form>
    </div>}
     </>
  )
}
