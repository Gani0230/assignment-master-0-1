function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    let t = req.headers.authorization;
    let token = t.split(" ")[1];
    try{
        jwt.verify(token,passkey)
        next()
    }
    catch(e){
        res.status(401).json({
            msg:"unverified user"
        })
    }
}

module.exports = userMiddleware;