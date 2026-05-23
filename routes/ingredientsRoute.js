const express = require('express');
const router = express.Router();
const ingredientsController = require('../controllers/ingredientsController');

/* #swagger.tags = ['Ingredients'] */
router.get('/', ingredientsController.getAllIngredients);

/* #swagger.tags = ['Ingredients'] */
router.get('/:id', ingredientsController.getSingleIngredient);

/* #swagger.tags = ['Ingredients'] */
router.post('/', ingredientsController.createIngredient);

/* #swagger.tags = ['Ingredients'] */
router.put('/:id', ingredientsController.updateIngredient);

/* #swagger.tags = ['Ingredients'] */
router.delete('/:id', ingredientsController.deleteIngredient);

module.exports = router;