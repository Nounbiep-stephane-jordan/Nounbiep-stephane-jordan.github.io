import mongoose from "mongoose"

const expenseSchema =   mongoose.Schema({
    goodname:String,
    date:String,
    supplier:String,
    amount:String,
    price:String,
    status:String,
    sold:String,
    storeID:String

 
});


export const Expense =  mongoose.model("Expense",expenseSchema);
