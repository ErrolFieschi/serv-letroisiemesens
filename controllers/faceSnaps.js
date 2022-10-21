const express = require('express');
const FaceSnaps = require('../models/FaceSnaps');

exports.findFaceSnaps = (req, res, next) => {
    FaceSnaps.find()
        .then(faceSnaps => res.status(200).json({ faceSnaps }))
        .catch(error => res.status(404).json({ message: error + "" }));
}