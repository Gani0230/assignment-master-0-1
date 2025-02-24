const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://admin01:Admin0230@cluster0.iwsu4.mongodb.net/Users")

async function data(){
    let userdata = await users.findOne({gmail: "ganesh0230@gmail.com"})
    console.log(userdata)
}
data()