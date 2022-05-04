  

require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const _ = require("lodash");
const ejs = require("ejs");
const mongoose = require("mongoose");
const app = express();
const bcrypt = require("bcrypt");
const saltrounds = 10;
const GoogleStrategy = require( 'passport-google-oauth20' ).Strategy;
const passport =require("passport")
const session =require("express-session")
const passportLocalMongoose = require("passport-local-mongoose")
const findOrCreate = require('mongoose-findorcreate');
const cookieParser = require("cookie-parser")
const FacebookStrategy = require("passport-facebook").Strategy

const imagesId =  [
  {
    id:0,
    imgName:"iphone",
    price:1000
  },

  {
    id:1,
    imgName:"itel",
    price:1000
  },

  {
    id:2,
    imgName:"itel",
    price:1000
  },

  {
      id:3,
      imgName:"itel",
      price:1000
  },
  {
      id:4,
      imgName:"itel",
      price:1000
  },
  {
      id:5,
      imgName:"iphone",
      price:1000
  },
  {
      id:6,
      imgName:"iphone",
      price:1000
  },
  {
      id:7,
      imgName:"iphone",
      price:1000
  },
  {
      id:8,
      imgName:"iphone",
      price:1000
  },  {
    id:9,
    imgName:"iphone",
    price:1000
}

 ]



 app.use(cookieParser())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static("public"));

app.use(session({
  secret: "Our little secret.",
  resave: false,
  saveUninitialized: false,

}));


app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb://localhost:27017/phoneDB");

const userSchema = new mongoose.Schema({
  email:String,
  password:String,
  googleId:String,
  facebookId:String
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);


const User = new mongoose.model("User",userSchema)

passport.use(User.createStrategy());

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

///authentication with google
 
passport.use(new GoogleStrategy({
    clientID:      process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/homelogin",
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      console.log(profile)
      return done(err, user);
    });

  }
));

app.get("/auth/google",
  passport.authenticate('google', { scope: ["profile"] })
);

app.get("/auth/google/homelogin",
  passport.authenticate('google', { failureRedirect: "/signup" }),
  function(req, res) {
    res.redirect("/homelogin");
  });




//authentication with facebook

 
passport.use(new FacebookStrategy({
  clientID:      process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: "http://localhost:3000/auth/facebook/homelogin",
  
},
function(request, accessToken, refreshToken, profile, done) {
  User.findOrCreate({ facebookId: profile.id }, function (err, user) {
    console.log(profile)
    return done(err, user);
  });
}
));

app.get("/auth/facebook",
passport.authenticate('facebook', { scope: ["profile"] })
);

app.get("/auth/facebook/homelogin",
passport.authenticate('facebook', { failureRedirect: "/signup" }),
function(req, res) {
  res.redirect("/homelogin");
});


////routes
app.get("/",function(req,res){
  
  if(req.isAuthenticated()){
    res.render("homelogin",{basketItem:imagesId})
  }  else {
   res.render("home",{basketItem:imagesId});
    
  }
   
});



app.post("/",function(req,res){
  const images=[];
  const search = req.body.searchItem;
  console.log(search)
  imagesId.map((item)=>{
    if(item.imgName==search){
       images.push(item)
    }
  })

if(images.indexOf(images[0]) !=-1){
  res.render("filtered",{filteredItem:images})
} else {
  res.render("notfound")
}

})

app.get("/phones",function(req,res){
  res.render("phones")
})



 app.get("/phone/:id",function(req,res){
   const id = req.params.id;
   console.log(req.body.name);
console.log(req.params.phoneName);
imagesId.map((img) => {
if(id == img.id) {
  res.render("phone",{phoneName:img.imgName})
}
})


 })






 app.get("/homelogin",function(req,res){

  if(req.isAuthenticated()){
    res.render("homelogin",{basketItem:imagesId})
  }  else {
    res.redirect("/signup")
  }

})

app.get("/buy",function(req,res){
  if(req.isAuthenticated()){
    res.render("buy")
  } else {
    res.redirect("/signup")
  }
})




  app.get("/signup",function(req,res){
    res.render("signup");
  })






 //////

//   const userSession = new mongoose.Schema({
//     sessionID :String

//   });

//   const Session = new mongoose.model("Session",userSession)

// app.post("/signup",function(req,res){
// bcrypt.hash(req.body.password,saltrounds,function(err,hash){
//   const newUser = new User({
//     email:req.body.name,
//     password:hash,
//   })
//   newUser.save(function(err){
//     if(err) {
//       console.log(err)
//     } else {
//       sessions = req.session
//       sessions.userid = req.body.password
//  const newSession = new Session({
//    sessionID:req.body.password
//  })
//  newSession.save()
//     res.render("homelogin",{basketItem:imagesId})
//     }
//      })
// })

// })


  // let sessions;  sessions = req.session
  // if(sessions.userid){
  //  res.render("homelogin",{basketItem:imagesId})
  // }











app.listen(3000,function(){
  console.log("server running on port 3000")
});






















 