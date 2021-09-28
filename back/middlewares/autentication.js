const jwt = require('jsonwebtoken');

module.exports.userAutentication = function(req,res,next){
    //console.log(req.headers.authorization);
    if (req.headers.authorization != undefined) {
        try {
            const token = req.headers.authorization.split(' ')[1];
            console.log(token);
            let result = jwt.verify(token,process.env.KEY);
            return next();
        } catch (error) {
            throw new Error("Token invalido ");
        }
    } else {
        throw new Error("Token invalido");
    }
}