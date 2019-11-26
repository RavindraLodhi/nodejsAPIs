var signUpModel = require('../models/user')
const express = require('express');
var router = express.Router();


router.get("/", (req, res) => {
    res.send({"method":"get"})
});

router.post("/", (req, res) => {
    var temp = req.body;
    var changObj = {
        "imageUrl": req.body.imageUrl,
        "phoneNo" :req.body.phoneNo,
        "fName" : req.body.fName,
        "lName" :req.body.lName
    } 
    signUpModel.updateMany({"fNmae":temp.fNmae},changObj,(err,data)=>{
       
        res.send({"method":data})

    })
   

})

router.delete('/',(req,res)=> {
    res.send({"method":"delet"})
})

router.put('/',(req,res)=> {
    res.send({"method":"put"})
})


module.exports = router;

