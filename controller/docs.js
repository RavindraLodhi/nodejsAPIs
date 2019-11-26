const express = require('express');
var router = express.Router();
var fs = require('fs');
var imgPath = '/path/yourimage.png';
var imageUpload = require('../models/imageUpload')
const multer = require('multer');
const xlsx = require('xlsx');
const app = express();

const storage = multer.diskStorage({

  destination: (req, file, callBack) => {
    callBack(null, '')
  },
  filename: (req, file, callBack) => {
    callBack(null, `FunOfHeuristic_${file.originalname}`)
  }
})
const upload = multer({ storage: storage })
//let upload = multer({ dest: 'uploads/' })
router.post("/", upload.single('file'), (req, res, next) => {
  const file = req.file;
  var imageFile = req.file.filename;
  if (imageFile) {
     var file1 = xlsx.readFile(imageFile);
    //console.log(file.Sheets["Sheet1"]);
     var wd = file1.Sheets["Sheet1"];
     var data = xlsx.utils.sheet_to_json(wd);
     res.send(data)
  }
else{
  const error = new Error('No File')
  error.httpStatusCode = 400
  return next(error)
}
  //var success = req.file.filename+"uploaded successfully";
  // var imageDetails = new imageUpload({
  //   imageName : imageFile
  // })
  // console.log(imageDetails);
  // if (!file) {
  //   const error = new Error('No File')
  //   error.httpStatusCode = 400
  //   return next(error)
  // }
  // res.send(file);
})

// app.post('/multipleFiles', upload.array('files'), (req, res, next) => {
//   const files = req.files;
//   console.log(files);
//   if (!files) {
//     const error = new Error('No File')
//     error.httpStatusCode = 400
//     return next(error)
//   }
//     res.send({sttus:  'ok'});
// })

module.exports = router;