const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const port = 4000;
const app = express();
const cors = require("cors")

app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());
// parse application/json
app.use(bodyParser.json()); 

mongoose.connect("mongodb://localhost:27017/restaurantDB");
const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    message:String
});

const User = new mongoose.model("User",userSchema);


app.get("/",cors(),(req,res) =>{
    res.send("working")
});

app.post("/contact",cors() ,(req,res)=>{
  console.log(req.body)
       const newuser = new User({
           name:req.body.name,
           email:req.body.email,
           message:req.body.message
       })

       newuser.save((err)=>{
        if(err){
          console.log(err)
        }
       })
       res.end()
})

app.listen(port,()=>{
    console.log("server running on port 4000")
})





