const router = require("express").Router();
const {resign, submitResponse} = require("../controllers/user.controller");
const jwtAuthorize = require("../middlewares/authorizeJwt.middleware");
const {validateSchema} = require("../middlewares/validate.middleware");
const {userValidationSchema,responsesValidationSchema} = require("../validations/user.validations");
const {dateValidation} = require("../middlewares/dateValidation.middleware");

router.post("/resign", jwtAuthorize, validateSchema(userValidationSchema), dateValidation, resign);
router.post("/responses", jwtAuthorize, validateSchema(responsesValidationSchema), submitResponse );

module.exports = router;

