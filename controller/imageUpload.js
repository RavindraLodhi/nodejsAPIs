var imageUpload = require('../models/imageUpload')
const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

router.get("/", (req, res) => {
  res.send(
    `<h1 style='text-align: center'>
            Wellcome to FunOfHeuristic 
            <br><br>
            <b style="font-size: 182px;">😃👻</b>
        </h1>`
  );
});

router.post("/", (req, res) => {
  var db = mongoose.connection;
  var Schema = mongoose.Schema;
  var User = new Schema({
      fName: {type: String, required: true},
      lName: {type: String, required: true}
  });

  var customerObject = db.model('User', User);
  customerObject.find({'_id': "5dd149f5522d5840a0513bb5" },(err,res)=>{
    console.log(res);
    console.log(err);
    
  })
 
  

 
})


module.exports = router;










// console.log(req.body.email);

// var file = req.body.file;
// var obj = {
//   imageUrl: file,
//   fName: req.body.fName,
//   lName: req.body.lName,
//   email: req.body.email,
//   phoneNo: req.body.phoneNo,
// }
// var imageDetails = new imageUpload()
// var db = mongoose.connection;
// var data = db.
// console.log(data);

//res.send(data)
// imageDetails.find({ '_id': "5dd149f5522d5840a0513bb5" },(err,res)=>{
//   console.log(err);
//   console.log(res);
  
  
// })
//db.getCollection('User').update({"fName":"nihal"},{$set:{'age':'89'}})