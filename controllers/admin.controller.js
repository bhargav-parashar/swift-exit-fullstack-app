const AdminService = require("../services/admin.service");
const AdminServiceInstance = new AdminService();

const getAllResignations = async (req,res) =>{
    try{
        const resignations = await AdminServiceInstance.getAllResignations();
        if(resignations.length === 0)
            return res.status(400).json({message : "No resignations availbale"});
        res.status(200).json(resignations);
    }catch(err){
        res.status(500).json({message:"Resignation Submission failed", err});
    }    
};

module.exports = {getAllResignations};