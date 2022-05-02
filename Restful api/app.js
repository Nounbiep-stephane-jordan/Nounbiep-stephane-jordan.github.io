 const express = require("express");
 const mongoose = require("mongoose");
 const ejs = require("ejs");
 const bodyParser = require("body-parser");

 const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static("public"));



mongoose.connect("mongodb://localhost:27017/wikiDB");

const articleSchema = mongoose.Schema({
  title:String,
  content:String
});

const Article = mongoose.model("Article",articleSchema);

//chaining route parameters for request on all articles
app.route("/articles")

.get(function(req,res){
  Article.find(function(err,foundArticles){
      if(!err){
        res.send(foundArticles)
      } else {
        res.send(err)
      }
  })
  // res.render("home");
})

.post(function(req,res){
  const newArticle = new Article({
    title:req.body.title,
    content:req.body.content
  })

newArticle.save(function(err){
  if(!err) {
    res.send("successfuly added new article to database");
  } else {
    res.send(err)
  }
})

})

.delete(function(req,res){
   Article.deleteMany({},function(err){
     if(!err) {
       res.send("successfuly deleted all articles in database");
     } else {
       res.send(err)
     }
   })
 });


 //chaining route parameters for request on specific articles
 app.route("/articles/:particularArticle")

.get(function(req,res){
  Article.findOne({title:req.params.particularArticle},function(err,foundArticle){
    if(foundArticle) {
      res.send(foundArticle)
    } else {
      res.send(err+"no article found")
    }
  })
})

.put(function(req,res){
  Article.updateOne(
    {title:req.params.particularArticle},  //specify update condition
    {title:req.body.title,content:req.body.content},  //replacing enteirely the found document by new values from user
    function(err){
      if(!err){
        console.log("successfuly")
        res.send("successfuly updated docoment in database")
      } else {
        res.send(err)
      }
    }
  )
})

.patch(function(req,res){
  Article.updateOne(
    {title:req.params.particularArticle},
    {$set:req.body},  //req.body returns an object with only values sent by user in our case  req.body={title:...., content:.....}
    function(err){
      if(!err) {
        console.log(req.body)
        res.send("successfuly updated document")
      } else {
        res.send(err)
      }
    }
  )
})

.delete(function(req,res){
  Article.deleteOne({title:req.params.particularArticle},function(err){
    if(!err){
      res.send("successfuly deleted article.")
    } else {
      res.send(err)
    }
  })
});






app.listen(3000,function(){
  console.log("server up and running on port 3000");
})
