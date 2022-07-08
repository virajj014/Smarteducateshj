const express = require("express");
const router = new express.Router();
const courseController = require("../controller/courseController");
const upload = require("../middleware/upload");


router.post("/course", upload.single('course_image'), courseController.createCourse);
router.get("/course/", courseController.getCourse);
router.get("/course/:key/:value", courseController.getCourse);
router.patch("/course/:id", upload.single('course_image'), courseController.updateCourse);
router.delete("/course/:id", courseController.deleteCourse); 


module.exports = router;