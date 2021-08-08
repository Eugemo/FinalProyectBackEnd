const Joi = require('Joi');

const schema = Joi.object({
    id: "",
    name: Joi.string().min(5).max(45).required(),
    address: Joi.string().min(5).max(50).required(),
    latitude: Joi.string().min(4).required(),
    longitude: Joi.string().min(4).required(),
    url: Joi.string()
});

const schemaPatch = Joi.object({
    id: "",
    name: Joi.string().min(5).max(45),
    address: Joi.string().min(5).max(50),
    latitude: Joi.string().min(4),
    longitude: Joi.string().min(4),
    url: Joi.string()
});

module.exports = {schema, schemaPatch};