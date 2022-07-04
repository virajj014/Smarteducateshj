const jwt = require("jsonwebtoken");
const enrollModel = require("../model/enrollModel");


const authenticate = async (req,res,next) => {
    try{
        const token = req.cookies.user;
        console.log(token);
        const decode = jwt.verify(token, process.env.SECRET_KEY);
        console.log(decode);

        const user = await enrollModel.findById({_id:decode._id});
        console.log(user);
        req.user = user;
        req.token = token;

        next();
    }catch(err){
        if(err.name == 'TokenExpiredError'){
        res.status(401).send("Token Expired");
        }else{
            res.status(401).send("Authentication failed");
        }
    }
}

module.exports = authenticate;