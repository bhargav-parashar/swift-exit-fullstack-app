const Resignation = require("../models/resignation.model");
const Response = require("../models/userResponse.model");

class AdminService{
    getAllResignations = () => Resignation.find({});
    getResignationById = (id) => Resignation.findById(id);
    updateResignationStatus = (id,payload) =>Resignation.findByIdAndUpdate(id,payload,{new:true});
    getExitResponses = () => Response.find({});
} 
module.exports = AdminService;