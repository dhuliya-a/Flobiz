const mongoose = require('mongoose');

//var PostModel = require('post');

const UserSchema = mongoose.Schema({
    email: String,
    password: String,
    bio: String,
    gender: String,
    age: Number,
    first_name: String,
    last_name: String,
    //posts:[list of all post ids?]
//posts. all the posts by the user
}, {
    timestamps: true
});

//module.exports = mongoose.model('User', UserSchema);

var user = mongoose.model('User', UserSchema);
module.exports=user