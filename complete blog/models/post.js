 const  mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    
    title: {
        type: String,
        required: true
    },

    content: {
        type: String,
        required: true
    },
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    authorName:{
        type:String
    },
    comments: {
        type:[],
        default: []
    },
    likes: {
       type:Number,
       default:0
    } ,
    authorImg:{
        type:String
    },
    postImg:{
        type:String
    }, 
    time :{
        type:String
    }

})

const Post = mongoose.model("Post", postSchema);
module.exports = Post;