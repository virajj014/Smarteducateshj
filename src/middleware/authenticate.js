const jwt = require("jsonwebtoken");

const authenticate = (req,res,next) => {
    try{
        const token = req.headers.authorization;
        console.log(token);
        const decode = jwt.verify(token, process.env.SECRET_KEY);
        console.log(decode);
        req.user = decode;
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