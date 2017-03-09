var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
                          nome: String,
                          cognome: String,
                          sesso: String,
                          eta: Number
});

var Users = mongoose.model('Users', userSchema);
module.exports = Users;
