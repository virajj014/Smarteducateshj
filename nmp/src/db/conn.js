const mongoose = require("mongoose")

/*****create connection to DB */
// mongoose.connect("mongodb://localhost:27017/mynewdb")
// .then(()=>{
//     console.log("connection Successful");
// }).catch((err)=>{
//     console.log("Connection Error")
// })
mongoose.connect("mongodb+srv://smarteducates:smarteducates123@cluster0.hiv62.mongodb.net/smarteducate?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log(`connection sucessful`);
}).catch((err) => console.log(`no connection ${err}`)
);