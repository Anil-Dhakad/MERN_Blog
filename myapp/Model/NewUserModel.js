var mongoose = require('mongoose')

var Schema = mongoose.Schema

var UserSchema = new Schema({
    username: String,
    dob: String,
    email: String, 
    password: String
}, {collection: 'newuser'});

var UserModel = mongoose.model('UserModel', UserSchema)

module.exports = UserModel