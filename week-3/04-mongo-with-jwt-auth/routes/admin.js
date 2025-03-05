const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Course, Admin } = require('../db')
const jwt = require("jsonwebtoken")
const { JWT_SECRET } = require("../config")

const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    Admin.create({
        username,
        password
    })

    res.status(200).send("Admin created successfully");
    
});

router.post('/signin',async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const user = await Admin.find({
        username: username
    })
    console.log(JWT_SECRET)

    if(user){
        token = jwt.sign({username}, JWT_SECRET)
        res.status(200).json({
            token: token
        })
    }
    else{
        res.status(404).send("User not found")
    }
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price
    const imageLink = req.body.imageLink;
    if (title && description && price && imageLink){
        Course.create({
            title,
            description,
            price,
            imageLink,
        })
        res.status(200).send("cource created successfully")
    }
    else{
        res.status(400).send("provide valid cource info")
    }
    });
    

router.get('/courses', adminMiddleware,async (req, res) => {
    // Implement fetching all courses logic
    const cources = await Course.find({});

    res.status(200).json({
        cources
    })

});

module.exports = router;