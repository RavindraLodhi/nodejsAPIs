const mongoose = require('mongoose');
var myFirsCollection = mongoose.Schema({
    workType: String,
    shift : String,
    sPrice :  String,
    ePrice : String,
    pricePerOver: String,
},
{
        strict: false,
        collection: 'workInformation'
    });

module.exports = mongoose.model('workInformation', myFirsCollection);