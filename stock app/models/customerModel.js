import mongoose from "mongoose"

const customerSchema =   mongoose.Schema({
    name:String,
    telephone:String,
    storeID:String,
    address:String
});


export const Customer =  mongoose.model("Customer",customerSchema);
