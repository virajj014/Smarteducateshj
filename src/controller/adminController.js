const adminModel = require("../model/adminModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

var login_attempt = 0;
module.exports = {
    createAdmin: async function (req,res){
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
    },
    getAllAdmin: async function (req,res){
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
    },
    getAdmin: async function (req,res){
        console.log("inside get data with multiple fields function");
        try{
            const getdata = await adminModel.find({
                    [req.params.key] : req.params.value,                    
                });
            if(getdata.length>0){
                res.status(200).send(getdata);
            }else{  
                res.status(404).send("No Record found");
            }
        }catch(err){
            res.status(500).send("Invalid Input");
        }
    },
    updateAdmin: async function (req,res){
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
    },
    deleteAdmin: async function (req,res){
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
    },
    loginAdmin: async function(req,res){
        console.log("inside login function");
        
        try{
            const username = req.body.email;
            const password = req.body.password;
    
            const useremail = await adminModel.findOne().or([{email:username},{username: username}]);
            console.log(useremail);
            if(!useremail){
                login_attempt += 1;
                res.status(404).send("Email or Password is incorrect."+`    login attempt: ${login_attempt}`);
                
            }else{
                console.log(password);

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
    },
}