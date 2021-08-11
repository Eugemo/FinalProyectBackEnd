const Joi = require('joi');

const schema = Joi.object({
    id: "",
    name: Joi.string().min(5).max(45).required(),
    address: Joi.string().min(5).max(50).required(),
    latitude: Joi.string().min(4).required(),
    longitude: Joi.string().min(4).required(),
    url: Joi.string().required()
});

const schemaPatch = Joi.object({
    id: "",
    name: Joi.string().min(5).max(45).required(),
    address: Joi.string().min(5).max(50).required(),
    latitude: Joi.string().min(4).required(),
    longitude: Joi.string().min(4).required(),
    url: Joi.string().required()
});

module.exports = {schema, schemaPatch};