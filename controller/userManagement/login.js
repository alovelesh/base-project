var app  = require('../../server');
var express = require('express');
var fs = require('fs');
var md5 = require('md5');
var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
var Validator = require('common-schema-validation');
var router = express.Router();
// Path of user json file
const USER_FILE = app.get('env') + '/assets/others/user.json';
// Login user schmea
var userLogin = {
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        length: {
            min: 6,
            max: 15
        }
    }
};
// Read file and take a callback as param
function readFile(cb) {
    fs.readFile(USER_FILE, function(err, data) {
        if (err) throw err;
        cb(data);
    })
}
// To check is user exist or not and return back with some data
router.post('/login', [new Validator(userLogin, true)], function(req, res) {
    readFile((data) => {
        data = JSON.parse(data || '[]');
        // Find given credential in user list
        data = data.find(ob => ob.email === req.validated.email && ob.password === md5(req.validated.password));
        // If user found
        if(data) {
            // Create token using JWT
            data.token = jwt.sign({email: data.email}, app.get('s_key'), {
              expiresIn: 36000 // expires in seconds
            });
            // Send response
            res.send({
                status: 'ok',
                data
            });
        }
        // If user not found
        else
            res.status(403).send({
                status: 'ko',
                message: 'No user found with provided details!'
            });
    })
})

router.post('/loginByToken',[new Validator({token : {type : String, required : true}}, true)], function(req, res) {
    jwt.verify(req.validated.token, app.get('s_key'), function(err, decoded) {
        if (err) {
            return res.status(401).send({
                status: 'ko',
                message: 'Failed to authenticate token.',
                error : err,
                data : (err.name === 'TokenExpiredError') ? jwt.decode(req.validated.token) : undefined
            });
        } else
        readFile((data) => {
            data = JSON.parse(data || '[]');
            // Find given credential in user list
            data = data.find(ob => ob.email === decoded.email);
            // If user found
            data ? 
                res.send({
                    status: 'ok',
                    data
                })
                :
                res.status(403).send({
                    status: 'ko',
                    message: 'No user found with provided details!'
                });
        })
    });
})

module.exports = router
