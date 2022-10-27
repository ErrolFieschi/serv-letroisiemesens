const mongoose = require('mongoose');

const recipeSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    steps: { type: Array, required: true },
    ingredients: { type: Array, required: true },
    imageUrl: { type: String, required: true },
    createdDate: { type: Date, required: true },
    prepTime: { type: Number, required: true },
    cookTime: { type: Number, required: true },
    eaters: { type: Number, required: true },
    comments: { type: Array, required: true },
    gallery: { type: Array, required: true },
    type: { type: String, required: true },
    userId: {type: String, required: true}
    
});

module.exports = mongoose.model('Recipe', recipeSchema);

