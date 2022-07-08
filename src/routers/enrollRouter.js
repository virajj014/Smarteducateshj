require('dotenv').config();
const express = require("express");
const router = new express.Router();
const enrollModel = require("../model/enrollModel");


/*****create enroll */
router.post("/enroll",async(req,res)=>{
    console.log("Inside post function");

    try{
        const data = new enrollModel(req.body);
        if(data){

        const addenroll = await data.save();
        
        res.status(201).send(addenroll);
        }else{
        res.status(400).send("Error");
        }
        
    }catch(err){
        if(err.toString().includes("11000") && err.toString().includes("email")){
            res.status(400).send("Duplicate Email ID not allowed");
        }else{
            res.status(400).send(err.toString());
        }
    }
})

/*****Get all data*/
router.get("/enroll",async(req,res)=>{
    console.log("inside get function");
    try{
        const getenroll = await enrollModel.find();
        if(getenroll.length>0){
            res.status(200).send(getenroll);
        }else{
            res.status(404).send("No Record found");
        }
    }catch(err){    
        res.status(500).send(err.toString());
    }
})


/*****Get data by id*/
router.get("/enroll/id=:id",async(req,res)=>{
    console.log("inside get function");
    try{
        const _id = req.params.id;
        const getenrollbyid = await enrollModel.findById(_id);
        if(!getenrollbyid){
            return res.status(404).send("Record Not Found");
        }else{
            res.status(201).send(getenrollbyid);
        }
    }catch(err){
        if(err.toString().includes("CastError")){
            res.status(500).send("Invalid ID");
        }else{
            res.status(500).send(err.toString());
        }
    }
})


/*****Get data by email*/
router.get("/enroll/email=:email",async(req,res)=>{
    console.log("inside get by email function");
    try{
        const _email = req.params.email;
        const getenrollbyemail = await enrollModel.find({email:_email});
        if(getenrollbyemail.length==0){
            return res.status(404).send("Record Not Found");
        }else{
            res.status(201).send(getenrollbyemail);
        }
    }catch(err){
        if(err.toString().includes("CastError")){
            res.status(500).send("Invalid email");
        }else{
            res.status(500).send(err.toString());
        }
    }
})

/*****Get data by mobile number*/
router.get("/enroll/mobilenumber=:mobileNo",async(req,res)=>{
    console.log("inside get by mobile function");
    try{
        const _mobileNo = req.params.mobileNo;
        const getenrollbyemobile = await enrollModel.find({mobileNo:_mobileNo});
        console.log(getenrollbyemobile);
        if(getenrollbyemobile.length == 0){
            return res.status(404).send("Record Not Found");
        }else{
            res.status(201).send(getenrollbyemobile);
        }
    }catch(err){
        if(err.toString().includes("CastError")){
            res.status(500).send("Invalid Mobile Number");
        }else{
            res.status(500).send(err.toString());
        }
    }
})


/*****Get data by status*/
router.get("/enroll/active=:active",async(req,res)=>{
    console.log("inside get by status function");
    try{
        const _active = req.params.active;
        const getenrollbyactive = await enrollModel.find({active:_active});
        if(getenrollbyactive.length==0){
            return res.status(404).send("Record Not found");
        }else{
            res.status(201).send(getenrollbyactive);
        }
    }catch(err){
        if(err.toString().includes("CastError")){
            res.status(500).send("Invalid Input");
        }else{
            res.status(500).send(err.toString());
        }
    }
})


/*****Get data by state*/
router.get("/enroll/state=:state",async(req,res)=>{
    console.log("inside get by state function");
    try{
        const state = req.params.state;
        const getenrollbystate = await enrollModel.find({state:state});
        if(getenrollbystate.length==0){
            return res.status(404).send("Record Not found");
        }else{
            res.status(201).send(getenrollbystate);
        }
    }catch(err){
        if(err.toString().includes("CastError")){
            res.status(500).send("Invalid Input");
        }else{
            res.status(500).send(err.toString());
        }
    }
})

/*****Get data by refferalcode*/
router.get("/enroll/referralCode=:referralCode",async(req,res)=>{
    console.log("inside get by referralCode function");
    try{
        const referralCode = req.params.referralCode;
        const getenrollbyreferralCode = await enrollModel.find({referralCode:referralCode});
        if(getenrollbyreferralCode.length==0){
            return res.status(404).send("Record Not found");
        }else{
            res.status(201).send(getenrollbyreferralCode);
        }
    }catch(err){
        if(err.toString().includes("CastError")){
            res.status(500).send("Invalid Input");
        }else{
            res.status(500).send(err.toString());
        }
    }
})





/*****Update Data By ID */
router.patch("/enroll/:id",async(req,res)=>{
    console.log("inside update function");
    try{

        const _id = req.params.id;
        const updateenrollbyid = await enrollModel.findByIdAndUpdate(_id, req.body,{new:true, runValidators: true});
        if(!updateenrollbyid){
            res.send("Record Not Found");
        }else{
            res.send(updateenrollbyid);
        }         
    }catch(err){       
        if(err.toString().includes("11000") && err.toString().includes("email")){
            res.status(400).send("Duplicate Email ID not allowed");
           }else{
            res.status(400).send(err.toString());
        }
    }
})



/*****Delete data by ID */
router.delete("/enroll/:id",async(req,res)=>{
    console.log("inside delete function");
    try{
        const _id = req.params.id;
        const deleteenrollbyid = await enrollModel.findByIdAndDelete(_id);
        if(!deleteenrollbyid){
            res.status(404).send("Record not found");
        }else{
            res.status(200).send(deleteenrollbyid);
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
        const password = req.body.pwd;

        const useremail = await enrollModel.findOne({email: email});
        if(!useremail){
            login_attempt += 1;
            res.status(404).send("Username or Password is incorrect."+`    login attempt: ${login_attempt}`);
            
        }else{
            if(useremail.pwd===password){
                if(useremail.active===true){
                    const token = await useremail.generateAuthToken();
                    console.log('the token: '+token);
                    res.status(201).send(useremail);
                }else{
                res.status(403).send("your account is restricted please contact support")
                }
            }else{
                login_attempt += 1;
            res.status(404).send("Email or Password is incorrect"+`    login attempt: ${login_attempt}`);
            }
        }
       
    }catch(err){
        res.status(404).send(err.toString());
    }
})


module.exports = router;