const express = require('express');
const router = express.Router();
const ingredientsController = require('../controllers/ingredientsController');
const { validateIngredient, validateId } = require('../middleware/validate');

/* #swagger.tags = ['Ingredients'] */
router.get('/', ingredientsController.getAllIngredients);

/* #swagger.tags = ['Ingredients'] */
router.get('/:id', validateId, ingredientsController.getSingleIngredient);

/* #swagger.tags = ['Ingredients'] */
router.post('/', validateIngredient, ingredientsController.createIngredient);

/* #swagger.tags = ['Ingredients'] */
router.put('/:id', validateId, validateIngredient, ingredientsController.updateIngredient);

/* #swagger.tags = ['Ingredients'] */
router.delete('/:id', validateId, ingredientsController.deleteIngredient);

module.exports = router;