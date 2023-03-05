const jwt = require('jsonwebtoken');

module.exports = (req,res,next)=>{
    if(req.get('Authorization')!=null){
        authHeader=req.get('Authorization');
    }
    if(!req.get('Authorization')){
        authHeader=req.get('authorization');
    }
    if(!authHeader){
        const error = new Error('Not authenticated.');
        error.statusCode = 401;
        throw error;
    }
    const token = authHeader.split(' ')[1];
    let decodedToken;
    try{
        decodedToken = jwt.verify(token,`${process.env.AUTH_SECRET}`);
    }catch(err){
        err.statusCode = 422;
        throw err;
    }
    if(!decodedToken){
        const error = new Error('Not authenticated.');
        error.statusCode = 401;
        throw error;
    }
    req.userId = decodedToken.userId;
    req.email = decodedToken.email;
    next();
}