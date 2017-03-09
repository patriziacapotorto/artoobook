var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
                   nome: {
                        type: String,
                        required: [true,'Devi inserire il nome']
                         },
                   cognome: {
                         type: String,
                         required: [true,'Devi inserire il cognome']
                        },
                    sesso: String,
                    eta: Number
});

var Users = mongoose.model('Users', userSchema);
module.exports = Users;
