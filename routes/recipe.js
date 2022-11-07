const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipe');

const auth = require('../middleware/auth');



router.post('/',auth, recipeController.createRecipe);
router.get('/:id', recipeController.findRecipeById);
router.get('/', recipeController.findAllRecipes);
router.get('/recipes/my-recipes',auth, recipeController.findMyRecipes);
router.delete('/:id',recipeController.deleteOneRecipe);


module.exports = router;