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

userSchema.pre('save', function (next) {
  this.nome = this.nome.charAt(0).toUpperCase()
              + this.nome.substring(1).toLowerCase();
  next();
});

var Users = mongoose.model('Users', userSchema);
module.exports = Users;
