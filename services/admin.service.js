const Resignation = require("../models/resignation.model");
const Response = require("../models/userResponse.model");
const Permission = require("../models/permission.model");
const Questionnaire = require("../models/questionnaire.model");
const  { ObjectId } = require ('mongodb');


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
        

      }
      
    ]);
  
  // .findById(id);
  getResignationById = (id) =>Resignation.aggregate([
    {
      $match:{_id: new ObjectId(id)}
    },
  {
      $lookup: {
        from: "users",
        localField: "employeeId",
        foreignField: "_id",
        as: "userDetails"
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
    }
  }
  ]);
 
  updateResignationStatus = (id, payload) =>Resignation.findByIdAndUpdate(id, payload, { new: true });
  
  getExitResponses = (employeeId) => Response.find({"userId":employeeId});

  reviewDetails = (resignId) =>Resignation.aggregate([
    {$match:{_id : new ObjectId(resignId) }},
    {$lookup:{
      from:'users',
      localField :'employeeId',
      foreignField:'_id',
      as:'userDetails'
    }},
    {$project:{
      _id:1,
      employeeId:1,
      lwd:1,
      status:1,
      createdAt:1,
      updatedAt:1,
      userDetails: { $arrayElemAt: ["$userDetails.username", 0] }
    }}
  ])
}
module.exports = AdminService;
