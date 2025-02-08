const UserService = require("../services/user.service");
const UserServiceInstance = new UserService();

const adminAuthorize = async (req,res,next) =>{
    try{
        const roleDetails = await UserServiceInstance.getUserRole(req.user.roleId);
        const {role} = roleDetails;
        if(role === "admin")
            next();
        else
            return res.status(403).json({message : "You are not authorized to access this resource."})
    }catch(err){
        res.status(500).json({message : "Something went wrong"})
    }
};

module.exports = adminAuthorize;