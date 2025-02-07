const bcrypt = require("bcrypt");
const Jwt = require("jsonwebtoken");
const User = require("../models/user.model");

class AuthService{
    generatePasswordHash = (plainTextPassword) => bcrypt.hash(plainTextPassword,10);
    comparePasswordHash = (plainTextPassword, hash) => bcrypt.compare(plainTextPassword, hash);
    generateJwt = (payload) => Jwt.sign(payload,process.env.JWT_SECRET_KEY, {expiresIn : process.env.JWT_TTL});
    verifyJwt = (token) => Jwt.verify(token,process.env.JWT_SECRET_KEY);    
}

module.exports = AuthService;