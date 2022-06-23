const bcrypt = require( "bcrypt");
const pkg = require( "dotenv");
const fs = require("fs")
const dotenv = pkg
const User = require( "../models/user.js");
const jsonwebtoken = require( "jsonwebtoken");
const Img = require("../models/img.js");
 
exports.register = (req, res) => {
    const nickname = req.body.nickname;
    const password = req.body.password;
    
console.log(nickname,password,req.body)
       
    password.trim();
    nickname.trim()


  User.findOne({nickname},(err,foundUser)=>{
    if (foundUser) {
        //    return res.send({error:"user nickname already exist"})
        console.log(foundUser,"here")
        req.flash("error", "user nickname already exist")
        return res.redirect("/register")
        }

        if (password.length <= 7) {
            // return res.send({error:"password lenght should be greather than 7"})
            req.flash("error", "password lenght should be greather than 7")
            return res.redirect("/register")
        }
        
         
        if (!req.file) {     
            // return res.send({error:"file not an image"})
            req.flash("error", "file not an image")
            return res.redirect("/register")
        } 
      
        const {filename,path,mimetype,encoding} = req.file
        console.log("finish here")
       
    
     
        const saltrounds = 10;
        bcrypt.hash(password,saltrounds)
        .then(hash =>{
            
            const profileImage ={
                imgname:filename,
                imgpath:path
            }
            const newUser = new User({
                nickname:nickname,password:hash,profileImage
            });
    
            const token = jsonwebtoken.sign({newUser_id:newUser._id},"secret",{expiresIn:"1h"});
            req.session.user = newUser;
             
            console.log("in register",newUser)
             newUser.save((err) =>{
                if(!err) {
                    res.cookie("access_token",token,{
                        httpOnly:true
                    })
                    // res.send({sucess:`Welcome ${newUser.nickname}`})
                 return res.redirect("/home")
                }
            })
        })     
     
    })

  

  
    
}

exports.Login = (req,res) =>{
    const {nickname,password} = req.body
    console.log(nickname,password)
    nickname.trim()
    password.trim()
    User.findOne({nickname},(err,foundUser) =>{
        if (!foundUser) {
        //   return  res.send({error:"no user with this name"})
        req.flash("error", "no user with this name")
        return res.redirect("/login")
        }

        bcrypt.compare(password,foundUser.password)
        .then(result =>{
            if (!result) {
            //   return  res.send({error:"passwords do not match"})
            req.flash("error", "passwords do not match")

            return res.redirect("/login")
            } 


                const token = jsonwebtoken.sign({newUser_id:foundUser._id},"secret",{expiresIn:"1h"});
                res.cookie("access_token",token,{
                    httpOnly:true
                })
                // res.send({sucess:`welcome back ${foundUser.nickname}`,img:foundUser._id})
                req.session.user = foundUser;
                req.flash("greet",`welcome back ${foundUser.nickname}`)
              return   res.redirect("/home")
                
            
        })
    })
     
}

exports.uploadfile =(req,res) =>{
    const image = req.file;
    const {nickname} = req.body;
    nickname.trim()
    
   const {filename,path,mimetype,encoding} = req.file
    if (!image) {     
        req.flash("error", "file not an image")
        // return res.send({error:"file not an image"})
        res.redirect("/login")
    } else {
        console.log("here")
        console.log(image,req.body,nickname,filename,path)
        User.updateOne({nickname},{$set:{"profileImage.imgname":filename,"profileImage.imgpath":path}},(err,result) =>{
            if (err) {
                console.log(err)
            } else {
                console.log(result)
                 
                // const img = new Img({
                //     user:nickname,
                //     img:{
                //         data:fs.readFileSync("images/"+filename),
                //         constentType:"image/jpg"
                //     }
                // })
              
                // img.save()
                // .then(res =>{
                //     // console.log(res)
                // })
                // .catch(err =>{
                //     console.log(err)
                // })
            //    return res.send({sucess:`profile added`}) 
            return redirect("/home")

            }
        })
        
    }
}

exports.sendImage = async(req,res) =>{
 console.log(req.params.id,"this is the user id")
 const id = req.params.id
 Img.findOne({id},(err,data) =>{
     console.log(data,"found imaged")
    res.send(data)
})

}


exports.getRegister = (req,res) =>{
    let message = req.flash('error');
    if (message.length > 0) {
        message = message[0];
    } else {
        message = null;
    }
    res.render("register",{message:message})
}

exports.getLogin = (req,res) =>{
    let message = req.flash('error');
    if (message.length > 0) {
        message = message[0];
    } else {
        message = null;
    }
    res.render("login",{message:message})
}