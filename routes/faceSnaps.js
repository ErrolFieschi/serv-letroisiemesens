const express = require('express');
const router = express.Router();
const faceSnapsController = require('../controllers/faceSnaps');

router.get('/',faceSnapsController.findFaceSnaps);


module.exports = router;