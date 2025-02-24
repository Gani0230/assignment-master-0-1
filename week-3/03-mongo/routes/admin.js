const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup',async (req, res) => {
    // Implement admin signup logic
    let username = req.body.username;
    let password = req.body.password;

    await Admin.create({
        username: username,
        password: password
    })

    res.status(200).json({
        message: "Admin created succesfully"
    })

});

router.post('/courses', adminMiddleware,async (req, res) => {
    // Implement course creation logic
    let title = req.body.title;
    let description = req.body.description
    let price = req/body.price;
    let imagelink = req.body.imageLink

    await Course.create({
        title: title,
        description: description,
        price: price,
        imagelink: imagelink
    })

    res.status(200).json({
        msg: "Course created succesfully"
    })
});


router.get('/courses', adminMiddleware,async (req, res) => {
    // Implement fetching all courses logic
    let data = await Course.find({})
    res.status(200).json({
        data,
        CourseId: _id
    })
});

module.exports = router;