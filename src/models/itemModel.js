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
    },
    dateofMfg:{
        type:Date,
        required:true,
    },
})
module.exports=mongoose.model("item",itemSchema)