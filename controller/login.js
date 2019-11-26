const express = require('express');
var router = express.Router();
var objectId = require('mongoose').Types.ObjectId;
var loginModel = require('../models/login')
const users = require('../models/user')
var jwt = require('jsonwebtoken');


router.post('/login', (req, res) => {

    const loginget = { email: req.body.email,password : req.body.password }
    loginModel.findOne(loginget, (err, dbres) => {
        if (dbres != null) {
            var token = jwt.sign(loginget, 'secretkey', (err, token) => {
                return res.json({
                    'massage': 200,
                    data: dbres, token: token,
                    'status': 'success'
                });
            });

        }
        else {
            return res.json({ 'error': 201, 'status': 'invalid cradiatial' });
        }
    })

});

router.get('/:id',(req,res)=>{
    console.log(req.params.id);
    res.send({"status":"succss","id":req.params.id})
})

router.post('/:get',varifyToken,(req,res)=>{
    console.log("running varify token");
    jwt.verify(req.token,'secretkey',(err,authData)=>{
       
        if(err){
            res.send(403)
        }
        else{
            res.send({
                sattus:"succes post get ssss",
                authData: authData
            })
        }
    })
  
})
//FORMATE OF TOKEN
//authorization Bearer <access_token>
//varify token
function varifyToken(req, res, next) { 
    console.log("running varifyToken......");
      
    //get auth header value
    var bearerHeader = req.headers['authorization']
    console.log(bearerHeader);
    
    //check if bearer is undefined
    if (typeof bearerHeader !== 'undefined') {
    //split at the space
    const bearer = bearerHeader.split(' ');
    console.log(bearer);
    
    //get token from array
    const bearerToken = bearer[0];
    console.log(bearerToken);
    
    //set the token     
    req.token = bearerToken;
    //next middleware
    next()

    }
    else {
        res.send(403)
    }

}

module.exports = router;