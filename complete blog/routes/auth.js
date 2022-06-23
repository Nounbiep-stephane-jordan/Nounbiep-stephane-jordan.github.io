const express = require(  "express");
const { Login, register, uploadfile ,sendImage,getRegister,getLogin} = require(  "../controller/auth.js");
const cors = require(  "cors")
 
const router = express.Router()

router.post("/register",cors() , register);
router.post("/login",cors(),Login);
router.post("/upload",cors(),uploadfile);
 router.get("/image/:id",cors(),sendImage)
 router.get("/register",getRegister)
 router.get("/login",getLogin)
module.exports = router;