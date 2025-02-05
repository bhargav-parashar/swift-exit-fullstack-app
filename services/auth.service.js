const bcrypt = require("bcrypt");
const Jwt = require("jsonwebtoken");
const User = require("../models/user.model");

class AuthService{
    generatePasswordHash = (plainTextPassword) => bcrypt.hash(plainTextPassword,10);
    comparePasswordHash = (plainTextPassword, hash) => bcrypt.compare(plainTextPassword, hash);
    generateJwt = (payload) => Jwt.sign(payload,process.env.JWT_SECRET_KEY, {expiresIn : process.env.JWT_TTL});

    create = (payload) => User.create(payload);
}

module.exports = AuthService;