 const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    nickname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profileImage: {
        imgname:String,
        imgpath:String
    },

    token:{
        type:String
    }

})

const User = mongoose.model("User", userSchema);
module.exports = User;