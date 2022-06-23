const express = require("express");
const router = new express.Router();
const enrollModel = require("../model/enrollModel");

router.post("/enroll",async(req,res)=>{
    console.log("Inside post function");

    try{
        const data = new enrollModel(req.body);

        const addenroll = await data.save();
        res.status(201).send(addenroll);
    }catch(err){
        res.status(400).send(err);
    }
})

/*****Get all data*/
router.get("/enroll",async(req,res)=>{
    console.log("inside get function");
    try{
        const getenroll = await enrollModel.find();
        res.status(201).send(getenroll);

    }catch(err){
        res.status(500).send(err);
    }
})


/*****Get data by id*/
router.get("/enroll/:id",async(req,res)=>{
    console.log("inside get function");
    try{
        const _id = req.params.id;
        const getenrollbyid = await enrollModel.findById(_id);
        if(!getenrollbyid){
            return res.status(404).send();
        }else{
            res.status(201).send(getenrollbyid);
        }

    }catch(err){
        res.status(500).send(err);
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
        const updateenrollbyid = await enrollModel.findByIdAndUpdate(_id, req.body,{new:true});
        res.status(200).send(updateenrollbyid);
        
    }catch(err){
        res.status(400).send(err);
    }
})



/*****Delete data by ID */
router.delete("/enroll/:id",async(req,res)=>{
    console.log("inside delete function");
    try{
        const deleteenrollbyid = await enrollModel.findByIdAndDelete(req.params.id);
        if(!req.params.id){
            return res.status(404).send();
        }else{
            res.status(200).send(deleteenrollbyid);
        }
        
    }catch(err){
        res.status(500).send(err);
    }
})

module.exports = router;