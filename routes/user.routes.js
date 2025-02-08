const router = require("express").Router();
const {resign} = require("../controllers/user.controller");
const authorize = require("../middlewares/authorizeJwt.middleware");
const {validateSchema} = require("../middlewares/validate.middleware");
const {userValidationSchema} = require("../validations/user.validations");

router.post("/resign",authorize, validateSchema(userValidationSchema), resign);

module.exports = router;

