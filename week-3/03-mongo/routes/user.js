const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const { default: mongoose } = require("mongoose");

// User Routes
router.post('/signup',async (req, res) => {
    // Implement user signup logic
    let username = req.body.username;
    let password = req.body.password;
    await User.create({
        username: username,
        password: password
    })

    res.status(200).json({
        msg:"User created successfully"
    })
});


router.get('/courses',async (req, res) => {
    // Implement listing all courses logic
    let data = await User.find({})
    res.status(200).json({
        data
    })
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    let id = req.params.courseId;

    let course = Course.findOne({
        _id: id
    })
    res.status(200).json({
        course
    })
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router