const express= require("express")
const mongoose=  require("mongoose")
const bodyParser=require("body-parser")

//const route=require('./route/route')
//let port = process.env.PORT || 3000


const app = express()

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://sonupk:1HivF6DXHWanVcYu@cluster0.vtjazgb.mongodb.net/FT-DB",{useNewUrlParser:true})
.then(()=>{
    console.log("MongoDB Connected..")
}).catch(err=>{
    console.log(err.message);
})

//app.use('/',route)

app.listen(3000, function(){
    console.log("Express app running on "+3000)
    });