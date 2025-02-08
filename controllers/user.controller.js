const UserService = require("../services/user.service");
const UserServiceInstance = new UserService();

//CREATE RESIGNATION
const resign = async (req,res) =>{
    try{
        const newResignation = await UserServiceInstance.resign(req.user._id, req.body.lwd);
        const body = {  
            data : {
                resignation : {
                    _id : newResignation._id
                }
            }
        };
        res.status(200).json(body);
    }catch(err){
        res.status(500).send({ message: "Resignation submission failed!", err });
    }
};

module.exports = {resign};