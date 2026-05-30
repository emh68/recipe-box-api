const { ObjectId } = require('mongodb');
const Joi = require('joi');

const recipeSchema = Joi.object({
    recipeName: Joi.string().required(),
    servings: Joi.number().required(),
    instructions: Joi.array().required(),
    ingredientList: Joi.array().required()
}).unknown(true);

const ingredientSchema = Joi.object({
    ingredientName: Joi.string().required(),
    category: Joi.string().required(),
    servingUnit: Joi.string().required()
}).unknown(true);

const validateRecipe = (req, res, next) => {
    const { error } = recipeSchema.validate(req.body, { errors: { wrap: { label: false } } });
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};

const validateIngredient = (req, res, next) => {
    const { error } = ingredientSchema.validate(req.body, { errors: { wrap: { label: false } } });
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};

const validateId = (req, res, next) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).json({
            message: "Validation failed: invalid MongoDB ObjectId."
        });
    }
    next();
};

module.exports = {
    validateRecipe,
    validateIngredient,
    validateId
};