const AuthService = require("../services/auth.service");
const AuthServiceInstance = new AuthService();

//CREATE USER
const createUser = async (req,res) =>{
    try{
        //Hash Password
        const hashedPassword = await AuthServiceInstance.generatePasswordHash(req.body.password);
        const newUser = await AuthServiceInstance.create({...req.body, password : hashedPassword});
        res.status(201).send(newUser);
        
    }catch(err){
        res.status(500).send({ message: "Registration failed!", err });
    }
}

module.exports = {createUser};