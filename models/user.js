
const mongoose = require('mongoose');
var myFirsCollection = mongoose.Schema({
    fName: String,
    lName: String,
    password: String,
    email:String,
    phoneNo: String,
    gendar:String,
    age:String,
    imageUrl : String
},
    {
        strict: false,
        collection: 'User'
    });

    
// myFirsCollection.static.findByC = async(u,p)=>{
// const user = await ravi.findOne({u})
// console.log('User',user);

// }
const ravi =  mongoose.model('login', myFirsCollection);
module.exports =ravi;


// basicInfo: {
//     fName: String,
//     lName: String,
//     mail: String,
//     mobNo: String,
//     password: String,
//     gender: String
// },
// workInfo: {
//     pricePerOver: String,
//     workType: String,
//     shift: String,
//     sPrice: String,
//     ePrice: String,
//     pricePerOver: String,
// },
// address: {
//     state: String,
//     distric: String,
//     block: String,
//     Post: String,
//     villageName: String,
// }