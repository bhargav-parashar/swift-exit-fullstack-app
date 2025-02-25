const Resignation = require("../models/resignation.model");
const Response = require("../models/userResponse.model");
const Permission = require("../models/permission.model");
const Questionnaire = require("../models/questionnaire.model");

class AdminService {
  getAllResignations = () =>
    Resignation.aggregate([
      {
        $lookup: {
          from: "users",
          localField: "employeeId",
          foreignField: "_id",
          as: "userDetails",
        },
      },
      {
          $project: {
          _id:1,
          employeeId:1,
          lwd:1,
          status:1,
          createdAt:1,
          updatedAt:1,
          userDetails: { $arrayElemAt: ["$userDetails.username", 0] }
        },
        

      },
      
    ]);
  getResignationById = (id) => Resignation.findById(id);
  updateResignationStatus = (id, payload) =>
    Resignation.findByIdAndUpdate(id, payload, { new: true });
  getExitResponses = () => Response.find({});
}
module.exports = AdminService;
