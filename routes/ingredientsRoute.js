const express = require('express');
const router = express.Router();
const ingredientsController = require('../controllers/ingredientsController');
const { validateIngredient, validateId } = require('../middleware/validate');
const checkToken = require('../middleware/isAuthenticated');


router.get('/', /* #swagger.tags = ['Ingredients'] */ ingredientsController.getAllIngredients);

router.get('/:id', /* #swagger.tags = ['Ingredients'] */ validateId, ingredientsController.getSingleIngredient);

router.post('/', /* #swagger.tags = ['Ingredients'] #swagger.security = [{ "OAuth2HeaderKey": [] }] */ checkToken, validateIngredient, ingredientsController.createIngredient);

router.put('/:id', /* #swagger.tags = ['Ingredients'] #swagger.security = [{ "OAuth2HeaderKey": [] }] */ checkToken, validateId, validateIngredient, ingredientsController.updateIngredient);

router.delete('/:id', /* #swagger.tags = ['Ingredients'] #swagger.security = [{ "OAuth2HeaderKey": [] }] */ checkToken, validateId, ingredientsController.deleteIngredient);

module.exports = router;