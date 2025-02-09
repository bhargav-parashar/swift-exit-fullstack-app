const mongoose = require("mongoose");

const userRoleSchema = new mongoose.Schema(
    {
        userId : { type: String },
        roleId : { type: String, default :"67a4e1b8f087e933ca2a02b4" }
    },
    {
        timestamps : true
    }
);

const userRoleModel = mongoose.model("UserRole",userRoleSchema,"userroles");

module.exports = userRoleModel; 

