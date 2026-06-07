const express = require('express');
const router = express.Router();
const recipesController = require('../controllers/recipesController');
const { validateRecipe, validateId } = require('../middleware/validate');
const checkToken = require('../middleware/isAuthenticated');


router.get('/', /* #swagger.tags = ['Recipes'] */ recipesController.getAllRecipes);

router.get('/:id', /* #swagger.tags = ['Recipes'] */ validateId, recipesController.getSingleRecipe);

router.post('/', /* #swagger.tags = ['Recipes'] #swagger.security = [{ "OAuth2HeaderKey": [] }] */ checkToken, validateRecipe, recipesController.createRecipe);

router.put('/:id', /* #swagger.tags = ['Recipes'] #swagger.security = [{ "OAuth2HeaderKey": [] }] */ checkToken, validateId, validateRecipe, recipesController.updateRecipe);

router.delete('/:id', /* #swagger.tags = ['Recipes'] #swagger.security = [{ "OAuth2HeaderKey": [] }] */ checkToken, validateId, recipesController.deleteRecipe);

module.exports = router;