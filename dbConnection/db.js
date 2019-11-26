const mongoose = require('mongoose');
 mongoose.connect('mongodb://localhost:27017/myFirstDB', { useNewUrlParser: true}, (err) => {
    if (!err) {
    } else {
        console.log("error in connecting database");
    }
});