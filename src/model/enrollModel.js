const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");


/*****create schema */
const enrollSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: ["Email ID already present",true],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error ("Invalid Email")
            }
        }
    },

    mobileNo: {
        type: String,
        required: true,
       
        validate(value){
            console.log(validator.isMobilePhone(value,['en-IN']));
            if(!validator.isMobilePhone(value,['en-IN'])){                
                throw new Error("Please Enter valid indian mobile number");                
            }
        }
        
    },
    pwd: {
        type: String,
        minlength: [8, "Password length should be atleast 8"],
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    referralCode: {
        type: String,
    },
    createdAt:{
        type: Date,
        default: Date.now,
        required: true,
    },
    updatedAt:{
        type: Date,
        default: Date.now,
        required: true,
    },
    active:{
        type: Boolean,
        required: true,
        default: true,
    },
})

/******Generating Tokens */
enrollSchema.methods.generateAuthToken = async function(){
    try{
        const token = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
        return token;   
    }catch(err){
        return err.toString();
    }
}

/*****create module */
const enrollModel = new mongoose.model("enrollCollection",enrollSchema);

module.exports = enrollModel; 