const mongoose = require("mongoose");

const imgSchema = new mongoose.Schema({
    user:String,
    img:{
        data:Buffer,
        contentType:String
    }
})

const Img = mongoose.model('Img', imgSchema);

module.exports = Img;