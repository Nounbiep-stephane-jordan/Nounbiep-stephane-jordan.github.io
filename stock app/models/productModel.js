import mongoose from "mongoose";

const productSchema =  new mongoose.Schema({
    name:String,
    date:{arrival:String,solddate:Date},
    price:String,
    quantity:String,
    storeID:String,
    productID:String,
    storeID:String,
    productID:String,
    incomming:String,
    stock:String,
    status:String,
    role:{type:String,default:"normal"}
});


export const Product = mongoose.model("Product",productSchema);
