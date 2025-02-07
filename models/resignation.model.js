const mongoose = require("mongoose");

const resignationSchema = new mongoose.Schema(
    {
        lwd:{ type : String, required : true}
    },
    {
        timestamps:true
    }

);

const resignationModel = mongoose.model("Resignation",resignationSchema);

module.exports = resignationModel;