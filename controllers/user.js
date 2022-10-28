const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');


exports.signup = (req, res, next) => {
    //console.log(req);
    //console.log("show username in loginfo : " + req.body.loginInfo.username);
    bcrypt.hash(req.body.loginInfo.password, 10)
        .then(hash => {
            const user = new User({
                username: req.body.loginInfo.username,
                email: req.body.emailGroup.email,
                password: hash
            });
            user.save()
                .then(() => res.status(201).json({ message: 'Utilisateur ' + req.body.loginInfo.username + ' bien enregistré'}))
                .catch(error => res.status(400).json("Une erreur est survenue, l'email est peut-être déjà utilisée"));
        })
        .catch(error => res.status(500).json({ error }));
};


exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })
    //User.findOne({ username: req.body.username })
        .then(user => {
            if (!user) {
                return res.status(401).json({ error: 'Utilisateur non trouvé !' });
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Mot de passe incorrect !' });
                    }
                    res.status(200).json({
                        userId: user._id,
                        token: jwt.sign(
                            { userId: user._id },
                            '49e8878ccff74aa107acc2d10e542d1a4550d124e079fefa7c71f3d219bea174495492f9c8f0498da264236cdd03338a5141f45c8d7bbf072af9142757c21077',
                            { expiresIn: '24h' }
                        )
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
 };
