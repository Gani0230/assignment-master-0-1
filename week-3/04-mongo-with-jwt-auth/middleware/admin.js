// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
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

module.exports = adminMiddleware;