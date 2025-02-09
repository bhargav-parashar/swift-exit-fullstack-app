const mongoose = require("mongoose");

const responseSchema = new mongoose.Schema(
    {
        questionId:{type: String, required: true},
        questionText :{type : String, required: true},
        response:{type: String, maxlength: 500}
    },
    { timestamps: true }
);
const userResponseSchema = new mongoose.Schema(
    {   
        userId:{type: String, required:true},
        responses:{type: [responseSchema], default:[]}
    },
    {
        timestamps : true
    }
);

const userResponseModel = mongoose.model("Userresponse",userResponseSchema );

module.exports = userResponseModel; 