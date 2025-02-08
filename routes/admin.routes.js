const router = require("express").Router();
const {getAllResignations} = require("../controllers/admin.controller");
const authorize = require("../middlewares/authorizeJwt.middleware");
const adminAuthorize = require("../middlewares/adminAuthorize.middleware");

router.get( "/resignations",authorize,adminAuthorize, getAllResignations );

module.exports = router;