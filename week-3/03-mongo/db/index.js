const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://admin01:Admin0230@cluster0.iwsu4.mongodb.net/course_selling_app');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: {type: String},
    password: {type: String}
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: {type: String},
    password: {type: String},
    purchasedCourses: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Course'
        }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description: String,
    price: Number,
    imagelink: {type: String, unique: true, required: true},
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}