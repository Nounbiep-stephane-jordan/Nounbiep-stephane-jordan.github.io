import React,{useState,useEffect} from 'react'
import axios from 'axios'
export default function Fileupload(props) {
    const [file, setFile] = useState();
    const [error,setError] = useState({
        value:""
   })
   const [sucess,setsucess] = useState({
       value:""
  })
    
    const [preview,setPreview] = useState()
   
    useEffect(()=>{
        if (!file) {
            setPreview(undefined)
            return
        }
         
        const objectUrl = URL.createObjectURL(file)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    },[file])
 
    function handleclick(event) {
        const formData = new FormData()
        formData.append("profileImage",file) //very important that the name profileimage is the same as that on the input name ,in multer.single name
  let nickname = props.nickname;
        // for (var key of formData.entries()) {
        //     console.log(key[0] + ', ' + key[1]);
        // }
        //  console.log("wow",file )
        const array = nickname.split("")
        let name =""
        for(let i=8;i<array.length;i++) {
            name += array[i]
        }
         console.log("name",name)
         formData.append("nickname",name)

            axios.post("http://localhost:4000/upload",formData )
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
        
             let img = event.target.files[0]
            setFile(img);        
         
      
    }



  return (
    <div>
        {preview ? <img src={preview} alt="profile"/> :""}
        {error ? error.value:""}
        {sucess ? sucess.value:""}
        <form  action="upload"  method="post" encType="multipart/form-data"  onSubmit={handleclick}>
            <input type="file" name="profileImage" onChange={handleChange}   /> <br />
            <button type='submit'>add profile</button>
        </form>
    </div>
  )
}
