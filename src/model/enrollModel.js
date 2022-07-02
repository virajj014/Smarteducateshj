const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const EnrollController = require("../controller/enrollController");



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
    referredCode: {
        type: String,
    },
    active:{
        type: Boolean,
        required: true,
        default: true,
    },
    referralCode: {
        type: String,
        unique: true,
        required: true,
        default: Date.now(),
        
    },
},{timestamps:true}) // timestamp creates two fields 1. createdAt that shows the time of field creation 
                                                  // 2. updatedAt that shows the time of last updated




/*****Bcrypt PAssword */
enrollSchema.pre("save", async function(next){
    if (this.isModified("pwd")){
        this.pwd = await bcrypt.hash(this.pwd, 10);
    }
    this.referralCode = await ref();
    next();
});

/******Generating Tokens */
enrollSchema.methods.generateAuthToken = async function(){
    try{
        const token = jwt.sign({_id:this._id}, process.env.SECRET_KEY, {expiresIn:'30s'});

        return token;  
    }catch(err){
        return err.toString();
    }
}

/******Generating refreshTokens */
enrollSchema.methods.generateAuthRefreshToken = async function(){
    try{
        const refreshToken = jwt.sign({_id:this._id}, process.env.SECRET_REFERESH_KEY,{expiresIn:'12h'});

        return refreshToken;   
    }catch(err){
        return err.toString();
    }
}

/*****create module */
const enrollModel = new mongoose.model("enrollCollection",enrollSchema);

module.exports = enrollModel; 

const ref = async function(){
    
    // const randomNumber = Math.floor(Math.random() * 99999);
    const randomNumber = Math.random().toString(36).substring(2,10+2).toUpperCase();
                const rf = await enrollModel.findOne({referralCode: randomNumber},{referralCode : 1, _id : 0});
                
                console.log('Random number: ' + randomNumber + 'DB: ' + rf);

                if(!rf){
                    console.log('inside if');
                    return randomNumber;
                }else{
                    console.log('inside else')
                    return Math.random().toString(36).substring(2,10+2).toUpperCase();
                }
};