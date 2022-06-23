const mongoose = require("mongoose");
const validator = require("validator");


/*****create schema */
const enrollSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: [true, "Email ID already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error ("Invalid Email")
            }
        }
    },
    confEmail: {
        type: String,
        required: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error ("Invalid Email")
            }
        }
    },
    mobileNo: {
        type: Number,
        required: true,
        min: 10,
        
    },
    createpwd: {
        type: String,
        min: 8,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    referralCode: {
        type: String,
    },
})

/*****create module */
const enrollModel = mongoose.model("enrollCollection",enrollSchema);

module.exports = enrollModel;