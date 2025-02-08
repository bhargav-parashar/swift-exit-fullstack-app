const Resignation = require("../models/resignation.model");

class AdminService{
    getAllResignations = () => Resignation.find({});
} 
module.exports = AdminService;