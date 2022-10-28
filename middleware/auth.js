const jwt = require('jsonwebtoken');
 
module.exports = (req, res, next) => {
   try {
       const token = req.headers.authorization.split(' ')[1];
       const decodedToken = jwt.verify(token, '49e8878ccff74aa107acc2d10e542d1a4550d124e079fefa7c71f3d219bea174495492f9c8f0498da264236cdd03338a5141f45c8d7bbf072af9142757c21077');
       const userId = decodedToken.userId;
       req.auth = {
           userId: userId
       };
	next();
   } catch(error) {
       res.status(401).json({ error });
   }
};