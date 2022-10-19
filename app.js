const mongoose = require('mongoose');
const express = require('express');
const app = express();

const recipeRoutes = require('./routes/recipe');
const faceSnapsRoutes = require('./routes/faceSnaps');
const postsRoutes = require('./routes/posts');

mongoose.connect('mongodb+srv://ErrolFieschi:ef30101997@cluster0.oqn9wxv.mongodb.net/test', 
{
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
.then(() => console.log('Connexion à Mongodb réussie'))
.catch(() => console.log('connexion à Mongodb échouée'));

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-headers','Origin, X-requested-Width, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/api/recipes', recipeRoutes);
app.use('/api/facesnaps',faceSnapsRoutes);
app.use('/api/posts', postsRoutes);

module.exports = app;