const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        username : { type: String, unique: true, required: true },
        password : { type : String, required : true},
        roleId : {type: String, default :"67a4e1b8f087e933ca2a02b4"}
    },
    {
        timestamps : true
    }
);

const userModel = mongoose.model("User",userSchema);

module.exports = userModel; 

