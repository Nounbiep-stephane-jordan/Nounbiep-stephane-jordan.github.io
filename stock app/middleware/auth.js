import jwt from "jsonwebtoken";


const verifytoken = (req,res,next)=>{
  console.log('verifying',req.cookies);
const token = req.cookies.acess_token;
console.log("token is",token)
if(!token) {
	res.redirect("/register")
} 

  try{
    const decoded = jwt.verify(token,process.env.TOKEN_KEY);
    req.user = decoded
    }catch(err){
      console.log(err);
    }
    return next()
}

 

export default verifytoken;
