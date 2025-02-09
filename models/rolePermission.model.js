const mongoose = require("mongoose");

const rolePersmissionSchema = new mongoose.Schema(
    {
        permissionId : {type : String, required: true},
        roleId : {type : String, required: true}
    },
    {
        timestamps: true
    }
)

const rolePersmissionModel = mongoose.model("RolePermission",rolePersmissionSchema,"rolepermissions");

module.exports = rolePersmissionModel;