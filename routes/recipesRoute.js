const express = require('express');
const router = express.Router();
const recipesController = require('../controllers/recipesController');
const { validateRecipe, validateId } = require('../middleware/validate');

/* #swagger.tags = ['Recipes'] */
router.get('/', recipesController.getAllRecipes);

/* #swagger.tags = ['Recipes'] */
router.get('/:id', validateId, recipesController.getSingleRecipe);

/* #swagger.tags = ['Recipes'] */
router.post('/', validateRecipe, recipesController.createRecipe);

/* #swagger.tags = ['Recipes'] */
router.put('/:id', validateId, validateRecipe, recipesController.updateRecipe);

/* #swagger.tags = ['Recipes'] */
router.delete('/:id', validateId, recipesController.deleteRecipe);

module.exports = router;