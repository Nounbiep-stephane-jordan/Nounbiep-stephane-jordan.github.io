const express = require(  "express");
 
 
const { getHome, getAddPost,addPost, deletePost, updatePost, getUpdatePost, getSinglePost ,addLike,addComment} = require("../controller/main.js");
const { verifytoken } = require("../middleware/auth.js");
 
const Mainrouter = express.Router()

 Mainrouter.get("/home",getHome);
 Mainrouter.get("/post",verifytoken,getAddPost)
 Mainrouter.post("/addpost",verifytoken,addPost)
 Mainrouter.post("/deletepost",verifytoken,deletePost)
 Mainrouter.post("/updatepost",verifytoken,updatePost)
 Mainrouter.get("/updatepost/:postid",verifytoken,getUpdatePost)
 Mainrouter.get("/singlepost/:singleId",getSinglePost)
 Mainrouter.get("/like/:postId",addLike)
 Mainrouter.post("/comment",verifytoken,addComment)
module.exports = Mainrouter;