const User = require("../models/user.model");

class UserService{
    create = async (payload) =>{
        try{
            const newUser = User.create(payload);
            return newUser;
        }catch(err){
            throw err;
        }
    };

    findByUsername = async (username) =>{
        try{
            const reqUser = User.findOne({username});
            return reqUser;
        }catch(err){
            throw err;
        }
    };
        
        
        
}

module.exports = UserService;