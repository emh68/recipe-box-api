const express = require('express');
const router = express.Router();
const ingredientsController = require('../controllers/ingredientsController');

router.get('/', () => { /* #swagger.tags = ['Ingredients'] */ }, ingredientsController.getAllIngredients);

router.get('/:id', () => { /* #swagger.tags = ['Ingredients'] */ }, ingredientsController.getSingleIngredient);

router.post('/', () => { /* #swagger.tags = ['Ingredients'] */ }, ingredientsController.createIngredient);

router.put('/:id', () => { /* #swagger.tags = ['Ingredients'] */ }, ingredientsController.updateIngredient);

router.delete('/:id', () => { /* #swagger.tags = ['Ingredients'] */ }, ingredientsController.deleteIngredient);

module.exports = router;