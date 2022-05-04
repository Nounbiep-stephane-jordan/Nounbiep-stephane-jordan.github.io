import mongoose from "mongoose"

const deptorSchema =   mongoose.Schema({
    name:String,
    datetaken:String,
    storeID:String,
    datetoclear:String,
    amounttaken:String,
    status :{type:String,default:"clean"}
});


export const Deptor =  mongoose.model("Deptor",deptorSchema);
