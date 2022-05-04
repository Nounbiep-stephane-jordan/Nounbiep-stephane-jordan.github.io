import mongoose from "mongoose"

const incommingSchema =   mongoose.Schema({
    goodname:String,
    date:{type:String,arriving:Date},
    supplier:String,
    amount:String,
    price:String,
    status:String,
    storeID:String


});


export const Incomming =  mongoose.model(" Incomming ",incommingSchema);
