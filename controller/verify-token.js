var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var app  = require('../server');
/*
This function is used to verify JWT token
 if token is not found then send response with 403 status
    else if token is not valid send response with 401 status
        */
module.exports = function(req, res, next) {
    // check header or url parameters or post parameters for token
    var token = req.headers['x-access-token'];
    // decode token
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, app.get('s_key'), function(err, decoded) {
            if (err) {
                return res.status(401).send({
                    status: 'ko',
                    message: 'Failed to authenticate token.',
                    error : err,
                    data : (err.name === 'TokenExpiredError') ? jwt.decode(token) : undefined
                });
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;
                next();
            }
        });
    } else
    // if there is no token return an error
        return res.status(403).send({
	        status: 'ko',
	        message: 'No token provided.'
    });
}