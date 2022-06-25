const mongoose = require("mongoose");
const validator = require("validator");

/*****create schema */

const adminSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error ("Invalid Email")
            }
        }
    },
    username:{
        type: String,
        required: true,
        unique:true,
    },
    mobileNo:{
        type: String,
        required: true,
       
        validate(value){
            console.log(validator.isMobilePhone(value,['en-IN']));
            if(!validator.isMobilePhone(value,['en-IN'])){                
                throw new Error("Please Enter valid indian mobile number");                
            }
        }
    },
    password:{
        type: String,
        minlength: [8, "Password length should be atleast 8"],
        required: true,
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
    }
})


/*****create module */
const adminMode = new mongoose.model("adminCollection",adminSchema);

module.exports = adminMode; 