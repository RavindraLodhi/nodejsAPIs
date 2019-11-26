const express = require('express');
var router = express.Router();
var objectId = require('mongoose').Types.ObjectId;
var workInfo = require('../models/workInfo');
var address1 = require('../models/address');
var storeData = require('../models/user');
//var jwt = require('jsonwebtoken');
router.post('/',(req,res)=>{
    const  reqpara = req.body;
    let UserInfo = new storeData({
        fName: reqpara.fName,
        lName: reqpara.lName,
        password: reqpara.password,
        email:reqpara.email,
        phoneNo:reqpara.phoneNo,
        gendar:reqpara.gendar,
        age:reqpara.age,
        imageUrl :null
    })
    UserInfo.save((err,doc)=>{
        if(!err){   
            res.send({status :"successfully ragistration"})
       }
        else{
            console.log("error in Jms Save :" + JSON.stringify(err, undefined, 2));
        }
    })
})

router.get('/',(req,res)=>{


    // if (!objectId.isValid(req.params.id)) {
    //     return res.status(400).send(`no record given id:${req.params.id}`);
    // } else {
    //     storeData.findById(req.params.id, (err, docs) => {
    //         if (!err) { res.send(docs) }
    //         else { console.log('Error in Retriving Jms :' + JSON.stringify(err, undefined, 2)); }
    //     });
    // 
    // console.log("get running.......");
     storeData.find({"fName":"surru"},(err,data)=>{
        res.send({"data":data})
    })  
})

module.exports = router;