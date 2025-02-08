const router = require("express").Router();
const {getAllResignations} = require("../controllers/admin.controller");
const authorize = require("../middlewares/authorizeJwt.middleware");

router.get("/resignations",authorize, getAllResignations);

module.exports = router;