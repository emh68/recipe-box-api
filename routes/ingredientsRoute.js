const express = require('express');
const router = express.Router();
const ingredientsController = require('../controllers/ingredientsController');
const { validateIngredient, validateId } = require('../middleware/validate');


router.get('/', /* #swagger.tags = ['Ingredients'] */ ingredientsController.getAllIngredients);

router.get('/:id', /* #swagger.tags = ['Ingredients'] */ validateId, ingredientsController.getSingleIngredient);

router.post('/', /* #swagger.tags = ['Ingredients'] */ validateIngredient, ingredientsController.createIngredient);

router.put('/:id', /* #swagger.tags = ['Ingredients'] */ validateId, validateIngredient, ingredientsController.updateIngredient);

router.delete('/:id', /* #swagger.tags = ['Ingredients'] */ validateId, ingredientsController.deleteIngredient);

module.exports = router;