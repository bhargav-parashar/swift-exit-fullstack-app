const Joi = require("joi");

const userValidationSchema = Joi.object().keys({
      lwd : Joi.string()
});


module.exports = {userValidationSchema};