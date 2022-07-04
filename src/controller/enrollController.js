const enrollModel = require("../model/enrollModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

var login_attempt = 0;
module.exports = {
    createuser : async function (req,res){    
    console.log("Inside post function");

    try{
        var data = new enrollModel(req.body);
        if(data){
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
},
    getalluser :  async function (req,res,){
    console.log("inside get function");
    try{
        const getenroll = await enrollModel.find();
        console.log(getenroll.toString());
        if(getenroll.length>0){
            res.status(200).send(getenroll);
        }else{
            res.status(404).send("No Record found");
        }
    }catch(err){    
        res.status(500).send(err.toString());
    }
},
    getuser : async function (req,res){
        console.log("inside get data with multiple fields function");
        try{
            const paramkey = req.params.key;
            const paramvalue = req.params.value;
            const getdata = await enrollModel.find({
                    [paramkey] : paramvalue,                    
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
    updateuser : async function (req,res){
        console.log("inside update function");
    
        try{    
            const _id = req.params.id;            
            const updateenrollbyid = await enrollModel.findById(_id);
    
            if(!updateenrollbyid){
                res.send("Record Not Found");
            }else{
                updateenrollbyid.set({
                    ...req.body
                });
                await updateenrollbyid.save();
                res.send(updateenrollbyid);
            }         
        }catch(err){       
            if(err.toString().includes("E11000 duplicate key error")){
                res.status(400).send("Duplicate Email ID not allowed");
               }else if(err.toString().includes("CastError")){
                res.status(500).send("Invalid ID");
               }else{
                res.status(400).send(err.toString());
            }
        }
},
    deleteuser : async function (req,res){
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
},
    loginuser : async function (req,res){
        console.log("inside login function");
        
        try{
            const email = req.body.email;
            const password = req.body.pwd;
            console.log(email);
            console.log(password);

    
            const useremail = await enrollModel.findOne({email: email});
            if(!useremail){
                login_attempt += 1;
                res.status(404).send("Please enter correct email id"+`  login attempt: ${login_attempt}`);
                
            }else{
    
                const isMatch = await bcrypt.compare(password, useremail.pwd);
    
                if(isMatch){
                    if(useremail.active===true){
    
                        const token = await useremail.generateAuthToken();
                        const refreshToken = await useremail.generateAuthRefreshToken();

                        console.log('the token: '+token);
                        console.log('the refreshToken: '+refreshToken);

                        // res.cookie("smartedu", token, {
                        //     httpOnly: true                        
                        // });
    
    
                        const usermailWithToken = Object.assign({token : token.toString(),refreshToken : refreshToken.toString() ,useremail})
                        res.status(201).send(usermailWithToken);
    
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
},
    refreshtoken : async function (req,res){
        const refreshToken = req.body.refreshToken;
        jwt.verify(refreshToken, process.env.SECRET_REFERESH_KEY, function(err,decode){
            if(err){
                err.status(400).send(err);
            }else{
                const token = jwt.sign({_id:this._id}, process.env.SECRET_KEY,{expiresIn:'60s'});
                const refreshToken = req.body.refreshToken;
                res.status(200).json({
                    message: 'Token Refereshed Successfully ',
                    token,
                    refreshToken
                });
            }
        })
},
    logoutuser: async function (req,res){
        try{
            console.log(req.user);
            res.clearCookie('user');
            console.log('Logout Successfull');
            await req.user.save();
        }catch(err){
            res.status(500).send(err.toString);
        }
},
};
