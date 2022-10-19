const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipe');

router.post('/',recipeController.createRecipe);
router.get('/:id',recipeController.findRecipeById);
router.get('/',recipeController.findAllRecipes);
router.delete('/:id',recipeController.deleteOneRecipe)


module.exports = router;