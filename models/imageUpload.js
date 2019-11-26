const mongoose = require('mongoose');

var uploadSchema = new mongoose.Schema({
    imageUrl: String,
    fName: String,
    lName: String,
    email: String,
    phoneNo: String,
},
{
    strict: false,
    collection: 'User'
})

module.exports = mongoose.model('uploadImage', uploadSchema);
