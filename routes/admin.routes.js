const router = require("express").Router();
const {getAllResignations, concludeResignation} = require("../controllers/admin.controller");
const jwtAuthorize = require("../middlewares/authorizeJwt.middleware");
const adminAuthorize = require("../middlewares/adminAuthorize.middleware");

router.get( "/resignations", jwtAuthorize, adminAuthorize, getAllResignations );
router.put("/conclude_resignation", jwtAuthorize, adminAuthorize, concludeResignation ); 

module.exports = router;