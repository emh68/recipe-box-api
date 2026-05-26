const { ObjectId } = require('mongodb');

const validateRecipe = (req, res, next) => {
    const { recipeName, servings, instructions, ingredientList } = req.body;

    if (!recipeName || !servings || !instructions || !ingredientList) {
        return res.status(400).json({
            message: "Validation failed: recipeName, servings, instructions, and ingredientList are required fields."
        });
    }
    next();
};

const validateIngredient = (req, res, next) => {
    const { ingredientName, category, servingUnit } = req.body;

    if (!ingredientName || !category || !servingUnit) {
        return res.status(400).json({
            message: "Validation failed: ingredientName, category, and servingUnit are required fields."
        });
    }
    next();
};

const validateId = (req, res, next) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).json({
            message: "Validation failed: The provided ID string format is invalid."
        });
    }
    next();
};

module.exports = {
    validateRecipe,
    validateIngredient,
    validateId
};