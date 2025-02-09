const User = require("../models/user.model");
const Resignation = require("../models/resignation.model");
const Role = require("../models/role.model");
const Response = require("../models/userResponse.model");
const UserRole = require("../models/userRole.model");

class UserService{
    create =  (payload) =>{
        try{
            const newUser = User.create(payload);
            return newUser;
        }catch(err){
            throw err;
        }
    };

    createUserRole = (payload) =>{
        try{
            const newUserRole = UserRole.create(payload);
            return newUserRole;
        }catch(err){
            throw err;
        }
    };

    findByUsername =  (username) =>{
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
    
    findByUserId =  (userId) =>{
        try{
            const user =  User.findById(userId);
            return user;
        }catch(err){
            throw err;
        }
    };

    getUserRole = (roleId) =>{
        try{
            const role = Role.findById(roleId);
            return role;
        }catch(err){
            throw err;
        }
    };

    submitResponse = (payload) =>{
        try{
            const response = Response.create(payload);
            return response;
        } catch(err){
            throw err;
        }
    };
        
}

module.exports = UserService;