const Joi = require('joi');

const regSchema = Joi.object().keys({
  email: Joi.string(),
  password: Joi.string().min(6),
  name: Joi.string()
});

export default regSchema;
