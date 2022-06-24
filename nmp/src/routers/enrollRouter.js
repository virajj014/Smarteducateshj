const express = require("express");
const router = new express.Router();
const enrollModel = require("../model/enrollModel");


/*****create enroll */
router.post("/enroll",async(req,res)=>{
    console.log("Inside post function");

    try{
        const data = new enrollModel(req.body);
        const addenroll = await data.save();
        res.status(201).send(addenroll);
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
router.get("/enroll/:id",async(req,res)=>{
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
// router.get("/enroll/:email",async(req,res)=>{
//     console.log("inside get function");
//     try{
//         const _email = req.params.email;
//         const getenrollbyid = await enrollModel.find({email:_email});
//         if(!getenrollbyemail){
//             return res.status(404).send();
//         }else{
//             res.status(201).send(getenrollbyemail);
//         }

//     }catch(err){
//         res.status(500).send(err);
//     }
// })



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

module.exports = router;