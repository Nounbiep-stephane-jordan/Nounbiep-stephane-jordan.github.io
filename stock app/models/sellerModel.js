import mongoose from "mongoose";

const sellerSchema =   mongoose.Schema({
    name:String,
    sellerID:String,
    storeID:String,
    telephone:String,
    products:[],
    role:{type:String,default:"normal"}
});


export const Seller = mongoose.model("Seller",sellerSchema);
