var mongoose = require('mongoose');
var Users = require('./users.model.js');

module.exports = (function (){

//RESTITUISCE LA LISTA DEGLI UTENTI
  var getUsers = function(req,res){
    Users.find().exec().then(function(data){
      res.status(200).json(data);
    }).catch(function (err) {
    res.status(500).send(err);
    });
  };

//CREAZIONE NUOVO UTENTE
  var createUser = function(req,res){
    res.send('Creazione utente');
    var utente = req.body;
    console.log(utente);
    var newUtente = new Users(utente);
    newUtente.save().then(function () {
    console.log('Utente salvato nel db');
    }).catch(function (err) {
    throw err;
    });
  };

//DETTAGLIO UTENTE
  var detailUser = function(req,res){
    var id = req.params.id;
    Users.findById(id).exec().then(function(data){
      res.status(200).json(data);
    }).catch(function (err) {
    throw err;
    });
  };

  var deleteUser = function(req,res){
    var id = req.params.id;
    res.send('Eliminazione utente con id: '+id);
  };

  //AGGIORNA UTENTE
  //update
// User.findOne({'nome': 'Paolo'})
//     .exec()
//     .then(function (data) {
//         data.eta = 35;
//         return data.save();
//     })
//     .then(function () {
//         console.log('Utente aggiornato');
//     })
//     .catch(function (err) {
//         throw err;
// });
  var updateUser = function(req,res){
    res.send('Aggiornato utente con id: '+id);
  };

  return {
    getUsers: getUsers,
    createUser:  createUser,
    detailUser: detailUser,
    deleteUser: deleteUser,
    updateUser: updateUser
  }

})();
