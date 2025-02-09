const router = require("express").Router();
const {resign} = require("../controllers/user.controller");
const jwtAuthorize = require("../middlewares/authorizeJwt.middleware");
const {validateSchema} = require("../middlewares/validate.middleware");
const {userValidationSchema} = require("../validations/user.validations");

router.post("/resign",jwtAuthorize, validateSchema(userValidationSchema), resign);

module.exports = router;

