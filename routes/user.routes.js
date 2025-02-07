const router = require("express").Router();
const {resign} = require("../controllers/user.controller");
const authorize = require("../middlewares/authorizeJwt.middleware");

router.post("resign",authorize,resign);

module.exports = router;