const mongoose = require('mongoose');
var myFirsCollection = mongoose.Schema({
    state: String,
    distric : String,
    block :  String,
    Post : String,
    villageName: String,
},
{
        strict: false,
        collection: 'addresses'
    });

module.exports = mongoose.model('addresses', myFirsCollection);