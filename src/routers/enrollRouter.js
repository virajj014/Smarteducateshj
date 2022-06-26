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
            console.log(req.body.cpwd);
            console.log(req.body.pwd);
            if(req.body.cpwd===req.body.pwd){
                const addenroll = await data.save();
        
                res.status(201).send(addenroll);
            }else{
                res.send("password and confirm password do not match");
            }
        
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



/*****Get data with custom field name and custom field value*/

    router.get("/enroll/:key/:value",async(req,res)=>{
        console.log("inside get data with multiple fields function");
        try{
            const paramkey = req.params.key;
            const getdata = await enrollModel.find({
                    [paramkey] : req.params.value,                    
                });
            if(getdata.length>0){
                res.status(200).send(getdata);
            }else{  
                res.status(404).send("No Record found");
            }
        }catch(err){
            res.status(500).send("Invalid Input");
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