require('dotenv').config();
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
require("./db/conn");
const enrollRouter = require("./routers/enrollRouter");
const adminRouter = require("./routers/adminRouter");
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(cookieParser());
app.use('/enroll',enrollRouter);
app.use('/admin',adminRouter);





app.listen(port,()=>{
    console.log(`on port ${port}`);
});