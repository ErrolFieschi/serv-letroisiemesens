const express = require('express');
const Recipe = require('../models/Recipe');


exports.findAllRecipes = (req, res, next) => {
    const title = req.query.title;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
    Recipe.find().sort({ "title": 1 }) //.limit
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Erreur durant la recherche des recettes"
            });
        });
};

exports.findMyRecipes = (req, res, next) => { //essayer de le mettre dans fine all recipes avec un filter, quoi que je pourrait pas faire l'auth si je fais ça a voir, peu etre que si
    //const userId = req.query.userId;
    //    var condition = userId ? { userId: userId };
    var query = { userId: req.auth.userId };
    Recipe.find(query)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "erreur durant la recherche des recettes"
            });
        });
};


exports.findRecipeById = (req, res, next) => {
    Recipe.findOne({ _id: req.params.id })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
};


exports.deleteOneRecipe = (req, res, next) => {
    Recipe.findOne({ _id: req.params.id })
        .then(recipe => {
            recipe.deleteOne({ _id: req.params.id })
                .then(() => { res.status(200).json({ message: 'Recette supprimée !' }) })
                .catch(error => res.status(401).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
}

exports.findOneRecipe = (req, res, next) => {
    //console.log("_id = " + {_id} + "req.params.id = " + req.params.id);
    Recipe.findOne({ _id: req.params.id })
        .then(recipe => res.status(200).json({ "id": recipe._id, "name": recipe.title, "cook_time": recipe.cook_time, "prep_time": recipe.prep_time }))
        .catch(error => res.status(404).json({ error }));
}



exports.findRecipe = (req, res, next) => {
    Recipe.find()
        .then(recipes => res.status(200).json({ recipes }))
        .catch(error => res.status(404).json({ message: error + "" }));
};


exports.createRecipe = (req, res, next) => {
    delete req.body._id;
    const recipe = new Recipe({
        ...req.body,
        userId: req.auth.userId
    });
    recipe.save()
        .then(() => res.status(201).json({ message: 'Recette ' + req.body.title + ' bien enregistré.' }))
        .catch(error => res.status(400).json({ error }));
}

exports.updateRecipe = (req, res, next) => {
    recipe.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Recette supprimée' }))
        .catch(error => res.status(404).json({ error }));
}


