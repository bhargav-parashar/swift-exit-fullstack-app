const Resignation = require("../models/resignation.model");

class AdminService{
    getAllResignations = () => Resignation.find({});
    getResignationById = (id) => Resignation.findById(id);
    updateResignationStatus = (id,payload) =>Resignation.findByIdAndUpdate(id,payload,{new:true});
} 
module.exports = AdminService;