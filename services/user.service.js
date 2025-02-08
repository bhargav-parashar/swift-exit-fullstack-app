const User = require("../models/user.model");
const Resignation = require("../models/resignation.model");

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
        
    resign = async (id, lastWorkDay) =>{
        try{
            const body = {
                employeeId : id,
                lwd : lastWorkDay
                
            };
            const newResignation = Resignation.create(body);
            return newResignation;
        }catch(err){
            throw err;
        }
    };
    
    findByUserId = async (userId) =>{
        try{
            const user = User.findById(userId);
            return user;
        }catch(err){
            throw err;
        }
    }
        
}

module.exports = UserService;