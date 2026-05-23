const express = require('express');
const router = express.Router();
const recipesController = require('../controllers/recipesController');

/* #swagger.tags = ['Recipes'] */
router.get('/', recipesController.getAllRecipes);

/* #swagger.tags = ['Recipes'] */
router.get('/:id', recipesController.getSingleRecipe);

/* #swagger.tags = ['Recipes'] */
router.post('/', recipesController.createRecipe);

/* #swagger.tags = ['Recipes'] */
router.put('/:id', recipesController.updateRecipe);

/* #swagger.tags = ['Recipes'] */
router.delete('/:id', recipesController.deleteRecipe);

module.exports = router;