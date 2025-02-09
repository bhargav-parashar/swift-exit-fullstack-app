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

const concludeResignation = async (req,res) =>{
    try{
        const newStatus = req.body.approved ? "Approved" : "Rejected";
        const newLwd = req.body.lwd;
        const id = req.body.resignationId;
        const resignation = await AdminServiceInstance.getResignationById(id);
        const body = {
            employeeId : resignation.employeeId,
            lwd : newLwd,
            status:newStatus,     
        };
        const updatedResignation = await AdminServiceInstance.updateResignationStatus(id,body);
        res.status(200).send();
    }catch(err){
        res.status(500).json({message:"Resignation status upadate failed", err});
    }
}

module.exports = {getAllResignations, concludeResignation};