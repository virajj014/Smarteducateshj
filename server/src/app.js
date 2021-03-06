require('dotenv').config();
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
require("./db/conn");
const enrollRouter = require("./routers/enrollRouter");
const adminRouter = require("./routers/adminRouter");
const courseRouter = require("./routers/courseRouter");

const port = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(cookieParser());
app.use('/uploads',express.static('uploads'));
app.use('/enroll',enrollRouter);
app.use('/admin',adminRouter);
app.use('/course', courseRouter);



app.listen(port,()=>{
    console.log(`on port ${port}`);
});