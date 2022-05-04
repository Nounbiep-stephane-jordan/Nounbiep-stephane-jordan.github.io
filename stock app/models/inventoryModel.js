import mongoose from "mongoose";

const inventorySchema =  mongoose.Schema({
    name:String,
    inventoryId:String,
    storeID:String,
    productID:String,
    product:[]
  
});


export const Inventory = mongoose.model("Inventory",inventorySchema);
 