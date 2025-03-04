const jwt = require("jsonwebtoken")
const key = "1234"

// let token = jwt.sign({username: "Ganesh"}, key)
let token = "eyJhbGciOiJIUzI1NiIsInR5CI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkdhbmVzaCIsImlhdCI6MTc0MTEwNjYwN30.69cvrHrS6C5T-ZI5yeLxqKnHq7v9r-vLOrEM1hFxmik"

// let decoded = jwt.decode(token)

let verified = jwt.verify(token, "1234")

console.log(verified)


