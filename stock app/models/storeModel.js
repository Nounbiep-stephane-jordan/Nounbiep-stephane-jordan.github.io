import mongoose from "mongoose";

const storeSchema =   mongoose.Schema({
    name:String,
    storeID:String,
    stock:String
  
});


export const Store = mongoose.model("Store",storeSchema);

