const jwt = require( "jsonwebtoken");


exports.verifytoken = (req, res, next) => {
    // console.log('verifying', req.cookies);
    const token = req.cookies.access_token;
    // console.log("token is", token)
    if (!token) {
        return res.redirect("/register")
    }

    try {
        const decoded = jwt.verify(token, "secret");
        req.user = decoded
    } catch (err) {
        console.log(err);
    }
    return next()
}



 