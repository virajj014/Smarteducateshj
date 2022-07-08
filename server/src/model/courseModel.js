const mongoose = require("mongoose");
const validator = require("validator");

/*****create schema */
const courseSchema = new mongoose.Schema({

    course_name: {
        type: String,
        required: true,
        unique: [true, "Course name already present"],
    },
    course_author: {
        type: String,
        required: true,
    },
    course_description: {
        type: String,
        required: true,
    },
    course_image: {
        type: String,
    }
},{timestamps:true})

const courseModel = mongoose.model("courseCollection", courseSchema);

module.exports = courseModel;