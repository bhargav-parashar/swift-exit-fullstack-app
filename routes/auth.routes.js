const router = require("express").Router();
const {register, login} = require("../controllers/auth.controller");
const {validateSchema} = require("../middlewares/validate.middleware");
const {authValidationSchema} = require("../validations/auth.validations");
const {checkHeader} = require("../middlewares/checkHeader.middleware");


router.post("/register", checkHeader, validateSchema(authValidationSchema), register);
router.post("/login", checkHeader, validateSchema(authValidationSchema), login );

module.exports = router;


