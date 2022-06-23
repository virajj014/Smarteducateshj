const express = require("express");
const app = express();
require("./db/conn");
const enrollRouter = require("./routers/enrollRouter")
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(enrollRouter);


app.listen(port,()=>{
    console.log(`on port ${port}`);
});