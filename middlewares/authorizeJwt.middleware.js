const AuthService = require("../services/auth.service");
const AuthServiceInstance = new AuthService();

const authorize = (req,res,next) =>{
   const token = req.headers.authorization.split(" ")[1]; // "Bearer sdfiosadfpp"
   const result =  AuthServiceInstance.verifyJwt(token);
   next();
}

module.exports = authorize;