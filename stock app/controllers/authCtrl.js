 import pkg from "dotenv";
 const dotenv = pkg
import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";
import jsonwebtoken from 'jsonwebtoken';


dotenv.config()
const authCtrl = {
     registerCtrl : async(req,res)=>{
  const {username,password,role} = req.body;
    const ifUser =  User.findOne({name:username},(err,foundUser)=>{
        if(foundUser){
                console.log("user already exist")
                res.render("error",{message:"User name already exist"})

        } else {
          console.log(password.length)
          if(password.length===6){
            const cryptedpassword = bcrypt.hash(password,10).then((hash)=>{
                const newUser = new User({name:username,password:hash,role});
                const token = jsonwebtoken.sign({newUser_id:newUser._id},process.env.TOKEN_KEY,{expiresIn:"1d"});
                newUser.token = token;
                console.log(newUser)
                res.cookie("acess_token",token,{
                    httpOnly:true
                })
                newUser.save((err)=>{
                    if(err){
                        console.log(err)
                        console.log("user already exist")
                        res.render("error",{message:err})
                    } else{
                      res.redirect("/dashboard")
                    }
                })

              })
        } else{
          res.render("error",{message:"Password must be at least six character  long"})
        }
          }

    });



    },

    loginCtrl:async(req,res)=>{
        const {username,password} = req.body;
         User.findOne({name:username},(err,founduser)=>{
            if(!founduser) return  res.render("error",{message:"No user with this name"})

            if(bcrypt.compare(password,founduser.password)){
                const token = jsonwebtoken.sign({user_id:founduser._id},process.env.TOKEN_KEY,{expiresIn:"1d"})
                founduser.token = token;
                res.cookie("access_token",token,{
                  httpOnly:true
                })
                console.log(founduser)
                res.redirect("/dashboard")

            }
        });



    }

}

export default authCtrl;
