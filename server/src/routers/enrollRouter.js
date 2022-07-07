require('dotenv').config();
const express = require("express");
const router = new express.Router();
// const authenticate = require("../middleware/authenticate");
const EnrollController = require("../controller/enrollController");


router.post("/enroll",EnrollController.createuser);
router.get("/enroll/:key/:value",EnrollController.getuser);
router.get("/enroll",EnrollController.getalluser);
router.patch("/enroll/:id",EnrollController.updateuser);
router.delete("/enroll/:id",EnrollController.deleteuser);
router.post("/login", EnrollController.loginuser);
router.post("/refreshToken", EnrollController.refreshtoken);
// router.get("/logout", authenticate, EnrollController.logoutuser);




module.exports = router;