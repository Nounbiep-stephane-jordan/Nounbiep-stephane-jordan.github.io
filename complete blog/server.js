const express = require('express')  ;
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const session = require("express-session")
const router = require('./routes/auth.js');
const cors = require("cors")
const multer = require("multer")
const path = require("path");
const Mainrouter = require('./routes/home.js');
const flash = require("connect-flash")
const app = express();
const port = 4000;

const fileStorage = multer.diskStorage( {
    destination:(req,file,cb)=>{
        cb(null,path.join(__dirname,"/images"))
    } ,
    filename: (req, file, cb) => {
      cb(null,file.originalname);
    }
}) 


app.use(flash())
app.use(cors())
app.set('view engine', 'ejs');
app.use(express.static("public"));
 
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/images', express.static(path.join(__dirname, 'postImages')));
 
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); //important for recieving data from react frontend
app.use(session({
    secret: "my secret",
    saveUninitialized: false,
    resave: false
}))
app.use(multer({storage:fileStorage}).single("profileImage"))
 
 

mongoose.connect("mongodb://localhost:27017/blogDB");





app.use(router)
app.use(Mainrouter)



app.listen(port, () => console.log(` app listening on port ${port}!`));