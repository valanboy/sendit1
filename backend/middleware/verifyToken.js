require("dotenv").config();
const jwt = require("jsonwebtoken");

const JwtSecret = process.env.JwtSecret;

//check json web token exists & is verified
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split("")[1];
    jwt.verify(token, JwtSecret, (err, decodedUser) => {
      if (err) res.status(403).json("token not valid");
      req.user = decodedUser;
      next();
    });
  } else {
    res.status(401).json("you are not authenticated");
  }
};

const verifyTokenAndAuthorization = (req, res, next)=>{
verifyToken(req, res, ()=>{
  if(req.user.role === "admin"){
    next()
  }else{
    res.status(403).json("only admoins are permitted to carry out this operation")
  }
})
}

module.exports = {verifyToken, verifyTokenAndAuthorization};
