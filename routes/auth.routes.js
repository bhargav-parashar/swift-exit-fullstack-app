const router = require("express").Router();
const {register, login, logout} = require("../controllers/auth.controller");
const {validateSchema} = require("../middlewares/validate.middleware");
const {authValidationSchema} = require("../validations/auth.validations");
const {checkHeader} = require("../middlewares/checkHeader.middleware");


router.post("/register", checkHeader, validateSchema(authValidationSchema), register);
router.post("/login", validateSchema(authValidationSchema), login );
router.post("/logout", logout );

module.exports = router;


