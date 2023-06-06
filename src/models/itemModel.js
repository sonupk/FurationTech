const { default: mongoose } = require("mongoose");

const itemSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3,
        maxlength:255,
    },
    description:{
        type:String,
        required:true,
        minlength:3,
        maxlength:2000,
    }
})
module.exports=mongoose.model("item",itemSchema)