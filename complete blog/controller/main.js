 
const { json } = require("express");
const { default: mongoose } = require("mongoose");
const Post = require("../models/post");
const User = require("../models/user")
const itemsToShow = 2
exports.getHome = (req,res) => {
    let message = req.flash('greet');
    if (message.length > 0) {
        message = message[0];
    } else {
        message = null;
    }


    const page = +req.query.page || 1;
    let totalPages;

    Post.find({}).countDocuments().then(num => {totalPages = num})
    Post.find({},(err,foundPost) =>{
        // console.log(foundPost,"found")
        
        if (foundPost) {
            // console.log(req.session.user,"here in get home")
            if (!req.session.user) {
              return  res.render("home",{imgpath:"",
              allpost:foundPost,
              currentuser:"",
              currentuserName:"",
              message,
              currentPage:page,
              hasNextPage:itemsToShow*page<totalPages,
              hasPreviousPage:page>1,
              nextPage:page+1,
              previousPage:page-1,
              lastPage:Math.ceil(totalPages/itemsToShow)
              })
            }
            let imgpath="";
                const name =req.session.user.nickname
                
                User.findOne({nickname:name },(err,foundUser) =>{
                    // console.log("here bferoe",req.session.user._id,"is" )
            const name =  req.session.user.nickname
                    if (!foundUser) {
                       return res.render("home",{imgpath:"",
                       allpost:foundPost,
                       currentuser:req.session.user._id,
                       currentuserName:name,
                       message,
                       currentPage:page,
                       hasNextPage:itemsToShow*page<totalPages,
                       hasPreviousPage:page>1,
                       nextPage:page+1,
                       previousPage:page-1,
                       lastPage:Math.ceil(totalPages/itemsToShow)
                    })
                    } else {
                        // console.log(imgpath+"is",req.session.user.profileImage.imgname)
                       return res.render("home",{
                           imgpath:req.session.user.profileImage.imgname,
                           allpost:foundPost,
                           currentuser:req.session.user._id,
                           currentuserName: name,
                           message,
                           currentPage:page,
                           hasNextPage:itemsToShow*page<totalPages,
                           hasPreviousPage:page>1,
                           nextPage:page+1,
                           previousPage:page-1,
                           lastPage:Math.ceil(totalPages/itemsToShow)
                        })
                    }
                })
        }
    })
    .skip((page-1)*itemsToShow)
    .limit(itemsToShow)
   
     
    
   
   
}

exports.getAddPost = (req,res) =>{
    let message = req.flash('error');
    if (message.length > 0) {
        message = message[0];
    } else {
        message = null;
    }
    let name =""
    let imgpath =""
   if (req.session.user) {
  name =  req.session.user.nickname
  imgpath = req.session.user.profileImage.imgname
  return res.render("addpost",{message,
    imgpath,
    currentuserName: name
})
   } 
   return res.redirect("/login")
 
}

exports.addPost = (req,res) =>{
    const {title,content} = req.body;
    const image = req.file
     if (!image) {
        req.flash("error","file not an image")
         return  res.redirect("/post")
     }
    const {filename} = req.file
    // console.log(image,req.body,req.session.user)

    if (!req.session.user) {
      return res.send("not logged in")
    } 
        const author = req.session.user
        const {nickname} = req.session.user
        const time = new  Date()
        time.toLocaleDateString()
    const newPost = new Post({
        time,title,content,authorId:author,authorName:nickname,authorImg:req.session.user.profileImage.imgname,postImg:filename
    })
    console.log(newPost ,"here is the post")
    newPost.save()
   return res.redirect("/home")
    
 
     
}

exports.deletePost = (req,res) =>{
    let id =req.body.postId
 
   console.log(id)
 
    Post.deleteOne({_id:id},(err,result) =>{
        if (err) {
            return console.log(err)
        } else {
            return res.redirect("/home")
        }
    }) 
}

exports.updatePost = (req,res) =>{
    
    const {title,content,profileImage,postId} = req.body;
 
    console.log(req.body,"in update post")
    Post.updateOne({_id:postId},{$set:{title:title,content:content,postImg:profileImage}})
    .then(result =>{
        console.log(result)
        return res.redirect("/home")
    }).catch(err =>{
        console.log(err)
    })
}

exports.getUpdatePost = (req,res) =>{
    const postid = req.params.postid;
    Post.findOne({_id:postid},(err,foundUser)=> {
        if (foundUser) {
            // console.log(foundUser,"in updatepost")
            const name =req.session.user.nickname
    return res.render("updatepost",{
        postToUpdate:foundUser,
        imgpath:req.session.user.profileImage.imgname,
        currentuser:req.session.user._id,
        currentuserName: name,
    })
        }
    })
    
}

exports.getSinglePost = (req,res) =>{
    const id = req.params.singleId
 
    Post.findOne({_id:id},(err,foundPost) =>{
        // console.log(foundPost,id,"in get single")
        res.render("singlepost",{post:foundPost})
    })

}

exports.addLike= (req,res) =>{
    const id = req.params.postId
    console.log(id,"in add like")
    Post.findOne({_id:id},(err,foundPost) =>{
        if (foundPost) {
            foundPost.likes += 1
            console.log(foundPost)
    return  res.send("ok")
        }
    })
   

}

exports.addComment = (req,res) =>{
const id = req.body.postId
const comment =  req.body.comment

console.log(id,comment)

Post.findOne({_id:id},(err,foundPost) =>{
    if (foundPost) {
        const old = foundPost.comments
        Post.updateOne({_id:id},{$set:{comments:[...old,comment]}})
        .then(result =>{
            console.log(result)
            console.log(foundPost,old)
            return res.redirect("/home")
        })
        .catch(err =>{
            console.log(err)
        })
    }
})
 

}