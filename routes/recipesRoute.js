const express = require('express');
const router = express.Router();
const recipesController = require('../controllers/recipesController');

router.get('/', recipesController.getAllRecipes);

router.get('/:id', recipesController.getSingleRecipe);

router.post('/', recipesController.createRecipe);

router.put('/:id', recipesController.updateRecipe);

router.delete('/:id', recipesController.deleteRecipe);

module.exports = router;