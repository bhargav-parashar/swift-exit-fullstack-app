const mongoose = require("mongoose");

const resignationSchema = new mongoose.Schema(
    {
        employeeId:{type: String},
        lwd:{ type : String, required : true},
        status : {type : String, default : "Pending"}
    },
    {
        timestamps:true
    }

);

const resignationModel = mongoose.model("Resignation",resignationSchema);

module.exports = resignationModel;