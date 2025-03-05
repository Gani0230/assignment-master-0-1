const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db")
const { JWT_SECRET } = require("../config")
const jwt = require("jsonwebtoken")

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    User.create({
        username,
        password
    })

    res.status(200).send("User created succesfully")
});

router.post('/signin',async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.find({
        username: username
    })
    if (user){
        const token = jwt.sign({username}, JWT_SECRET);
        res.status(200).json({
            token
        })
    }
    else{
        res.status(400).send("user not exist")
    }

});

router.get('/courses',async (req, res) => {
    // Implement listing all courses logic
    const cources = await Course.find({})

    res.status(200).json({
        cources
    })
});

router.post('/courses/:courseId', userMiddleware,async (req, res) => {
    // Implement course purchase logic
    const courceID = req.params.courseId;
    let token = req.headers.authentication;
    token = token.split(" ")[1];
    const decoded = jwt.decode(token);
    const username = decoded.username;
    console.log(username)

    await User.updateOne({
        username: username
    },{
        "$push":{purchasedCourses: courceID}
    })
    res.status(200).send("cource purchased succesfully");
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    let token = req.headers.authentication;
    token = token.split(" ")[1];
    const decoded = jwt.decode(token);
    const username = decoded.username;
    
    let user = await User.findOne({   // find one return single element while find returns list of elements
        username: username
    })

    console.log(user)
    console.log(user.username)

    const purchased = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    })

    res.status(200).json({
        purchased
    })
});

module.exports = router