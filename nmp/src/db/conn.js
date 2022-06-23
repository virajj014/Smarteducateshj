const mongoose = require("mongoose")

/*****create connection to DB */
mongoose.connect("mongodb://localhost:27017/mynewdb")
.then(()=>{
    console.log("connection Successful");
}).catch((err)=>{
    console.log("Connection Error")
})