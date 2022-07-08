const express = require("express");
const router = new express.Router();
const adminModel = require("../model/adminModel");

/*****create admin */
router.post("/admin",async(req,res)=>{
    console.log("Inside post function");

    try{
        const data = new adminModel(req.body);
        const addadmin = await data.save();
        res.status(201).send(addadmin);
    }catch(err){
        if(err.toString().includes("11000") && err.toString().includes("email")){
            res.status(401).send("Email id already exist");
        }else if(err.toString().includes("11000") && err.toString().includes("username")){
            res.status(401).send("Username already exist");
        }else{
            res.status(400).send(err.toString());
        }
    }
})


/*****Get all data*/
router.get("/admin",async(req,res)=>{
    console.log("inside get function");
    try{
        const getadmin = await adminModel.find();
        if(getadmin.length>0){
            res.status(200).send(getadmin);
        }else{
            res.status(404).send("No Record found");
        }
    }catch(err){    
        res.status(500).send(err.toString());
    }
})


/*****Get data by id*/
router.get("/admin/:id",async(req,res)=>{
    console.log("inside get function");
    try{
        const _id = req.params.id;
        const getadminbyid = await adminModel.findById(_id);
        if(!getadminbyid){
            return res.status(404).send("Record Not Found");
        }else{
            res.status(201).send(getadminbyid);
        }
    }catch(err){
        if(err.toString().includes("CastError")){
            res.status(500).send("Invalid ID");
        }else{
            res.status(500).send(err.toString());
        }
    }
})


/*****Update Data By ID */
router.patch("/admin/:id",async(req,res)=>{
    console.log("inside update function");
    try{

        const _id = req.params.id;
        const updateadminbyid = await adminModel.findByIdAndUpdate(_id, req.body,{new:true, runValidators: true});
        if(!updateadminbyid){
            res.send("Record Not Found");
        }else{
            res.send(updateadminbyid);
        }         
    }catch(err){       
        if(err.toString().includes("11000") && err.toString().includes("email")){
            res.status(400).send("Email ID already Exists");
           }else if(err.toString().includes("11000") && err.toString().includes("username")){
            res.status(401).send("Username already exist");
        }else {
            res.status(400).send(err.toString());
        }
    }
})


/*****Delete data by ID */
router.delete("/admin/:id",async(req,res)=>{
    console.log("inside delete function");
    try{
        const _id = req.params.id;
        const deleteadminbyid = await adminModel.findByIdAndDelete(_id);
        if(!deleteadminbyid){
            res.status(404).send("Record not found");
        }else{
            res.status(200).send(deleteadminbyid);
        }     
    }catch(err){
        res.status(500).send(err.toString());
    }
})



/*****Login API */
var login_attempt = 0;
router.post("/login", async(req,res)=>{
    console.log("inside login function");
    
    try{
        const email = req.body.email;
        const password = req.body.password;

        const useremail = await adminModel.findOne({email: email});
        if(!useremail){
            login_attempt += 1;
            res.status(404).send("Email or Password is incorrect."+`    login attempt: ${login_attempt}`);
            
        }else{
            if(useremail.password===password){
                if(useremail.active===true){
                res.status(201).send(useremail);
                }else{
                res.status(403).send("your account is restricted please contact support")
                }
            }else{
                login_attempt += 1;
            res.status(404).send("Username or Password is incorrect"+`    login attempt: ${login_attempt}`);
            }
        }
       
    }catch(err){
        res.status(404).send(err.toString());
    }
})




module.exports = router;