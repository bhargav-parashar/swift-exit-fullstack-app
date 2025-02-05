const router = require("express").Router();
const {createUser} = require("../controllers/auth.controller");
const {validateSchema} = require("../middlewares/validate.middleware");
const {authValidationSchema} = require("../validations/auth.validations");
const {checkHeader} = require("../middlewares/checkHeader.middleware");

router.post("/register", checkHeader, validateSchema(authValidationSchema), createUser);

module.exports = router;


