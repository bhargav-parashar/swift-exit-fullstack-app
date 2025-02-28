const router = require("express").Router();
const {getAllResignations, concludeResignation,getExitResponses,getResignationById, reviewDetails} = require("../controllers/admin.controller");
const jwtAuthorize = require("../middlewares/authorizeJwt.middleware");
const adminAuthorize = require("../middlewares/adminAuthorize.middleware");

router.get( "/resignations", jwtAuthorize, adminAuthorize, getAllResignations );
router.get( "/resignation", jwtAuthorize, adminAuthorize, getResignationById );
router.put("/conclude_resignation", jwtAuthorize, adminAuthorize, concludeResignation ); 
router.get("/exit_responses", jwtAuthorize, adminAuthorize, getExitResponses );
router.get("review",jwtAuthorize, adminAuthorize, reviewDetails);

module.exports = router;