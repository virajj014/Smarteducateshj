const courseModel = require("../model/courseModel");

module.exports = {
    createCourse: async function (req, res) {
        console.log("inside createCourse function.");
        console.log(req.body);

        try {
            const data = new courseModel(req.body);
            if (req.file) {
                data.course_image = req.file.path
            }
            const coursedata = await data.save();
            console.log(coursedata);
            res.status(200).send(coursedata);
        } catch (err) {
            if (err.toString().includes('E11000 duplicate key error')) {
                res.status(400).send('Course with the same name is already present');
            } else {
                res.status(400).send(err.toString());
            }
        }
    },
    getCourse: async function (req, res) {
        console.log('Indside getCourse function');

        try {
            const paramkey = req.params.key;
            const paramvalue = req.params.value;

            if (paramkey && paramvalue) {
                const getdata = await courseModel.find({
                    [paramkey]: paramvalue,
                });
                if (getdata.length > 0) {
                    res.status(201).send(getdata);
                } else {
                    res.status(404).send('No data found');
                }
            } else {
                console.log('inside else');
                const getdata = await courseModel.find();
                if (getdata.length > 0) {
                    res.status(201).send(getdata);
                } else {
                    res.status(404).send('No data found');
                }
            }
        } catch {
            res.status(500).send(err.toString());
        }
    },
    updateCourse: async function (req, res) {
        console.log("inside updateCourse function");

        try {
            const _id = req.params.id;
            const updatecoursebyid = await courseModel.findById(_id);

            if (!updatecoursebyid) {
                res.send("Record Not Found");
            } else {
                
                if (req.file) {
                    req.body.course_image = req.file.path
                }
                updatecoursebyid.set({
                    ...req.body
                });
                await updatecoursebyid.save();
                res.send(updatecoursebyid);
            }
        } catch (err) {
            if (err.toString().includes("E11000 duplicate key error")) {
                res.status(400).send("Course with the same name is already present");
            } else {
                res.status(400).send(err.toString());
            }
        }
    },
    deleteCourse: async function (req, res) {
        console.log("inside deleteCourse function");

        try {
            const _id = req.params.id;
            const id = await courseModel.findOne({ _id }, { _id: 1 });
            console.log(id);
            if (!id) {
                res.status(404).send('No Record Found To Delete');
            } else {
                const deleteddata = await courseModel.findByIdAndDelete(_id);
                res.status(201).send(deleteddata);
            }
        } catch (err) {
            if (err.toString().includes('CastError')) {
                res.status(404).send('No Record Found To Delete');
            } else {
                res.status(400).send(err.toString());
            }
        }
    }
}