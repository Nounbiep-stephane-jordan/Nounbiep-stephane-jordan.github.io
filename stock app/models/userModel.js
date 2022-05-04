import mongoose from "mongoose";

const userSchema =  mongoose.Schema({
    name:String,
    password:String,
    storeID:String,
    token:String,
    role:{type:String,default:"normal"}
});


export const User = mongoose.model("User",userSchema);

