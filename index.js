const express = require('express');
const { mongoose } = require('./dbConnection/db'); 
const login = require('./controller/login');
const singUp = require('./controller/singUp')
const bodyParser = require('body-parser');
const docs =require('./controller/docs')
var profileUpdate = require("./controller/profileUpdate")
var excelRead = require('./controller/excelRead')
const app = express();
const cors = require('cors');
app.use(cors({ origin: 'http://localhost:4201' }));
app.use(bodyParser.json());

app.use('/login',login);
app.use('/singup',singUp);
app.use('/docs',docs);  
app.use('/updateProfile',profileUpdate)
app.use('/excelRead',excelRead)
app.listen(3000,()=>{
})

// const xlsx = require('xlsx');
// var file = xlsx.readFile("excel.xlsx");
//console.log(file.Sheets["Sheet1"]);
// var wd = file.Sheets["Sheet1"];
// var data = xlsx.utils.sheet_to_json(wd);
// console.log(data);

