const express = require('express');
const router = express.Router();
const recipesController = require('../controllers/recipesController');

//Testing
router.get('/test', (req, res) => {
    res.send("The router is working!");
});

router.get('/', () => { /* #swagger.tags = ['Recipes'] */ }, recipesController.getAllRecipes);

router.get('/:id', () => { /* #swagger.tags = ['Recipes'] */ }, recipesController.getSingleRecipe);

router.post('/', () => { /* #swagger.tags = ['Recipes'] */ }, recipesController.createRecipe);

router.put('/:id', () => { /* #swagger.tags = ['Recipes'] */ }, recipesController.updateRecipe);

router.delete('/:id', () => { /* #swagger.tags = ['Recipes'] */ }, recipesController.deleteRecipe);

module.exports = router;