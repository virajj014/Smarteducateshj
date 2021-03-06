const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");


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
    active:{
        type: Boolean,
        required: true,
        default: true,
    }
},{timestamps:true})

/*****Bcrypt PAssword */
adminSchema.pre("save", async function(next){
    if (this.isModified("password")){
        this.password = await bcrypt.hash(this.password, 10);
    }
   
    next();
});


/*****create module */
const adminMode = new mongoose.model("adminCollection",adminSchema);

module.exports = adminMode; 