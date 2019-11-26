const mongoose = require('mongoose');
var myFirsCollection = mongoose.Schema({
        email: String,
        password: String
},
        {
                strict: false,
                collection: 'User'
        });

module.exports = mongoose.model('User', myFirsCollection);
