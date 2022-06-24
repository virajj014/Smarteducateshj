const mongoose = require("mongoose");
const validator = require("validator");


/*****create schema */
const enrollSchema = new mongoose.Schema({
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

    mobileNo: {
        type: Number,
        required: true,
        minlength: 10,
        
    },
    createpwd: {
        type: String,
        minlength: 8,
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
    }
})

/*****create module */
const enrollModel = new mongoose.model("enrollCollection",enrollSchema);

module.exports = enrollModel; 