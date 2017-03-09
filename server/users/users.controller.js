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


//CANCELLA UTENTE
  var deleteUser = function(req,res){
    var id = req.params.id;
    Users.findByIdAndRemove(id).exec().then(function(data){
     res.status(200).json(data);
    }).catch(function (err){
    throw err;
    });
  };

  //AGGIORNA UTENTE
  var updateUser = function(req,res){
      var id = req.params.id;
      var newData = req.body;
      Users.findByIdAndUpdate(id, newData).then(function(data){
        res.status(200).json(data);
      }).catch(function (err){
      throw err;
      });
  };

  var cercaUser = function(req,res){
    var cerca = req.query.cerca;
    Users.find({$or: [{nome:cerca},{cognome:cerca}]}).exec().then(function(data){
      res.status(200).json(data);
    }).catch(function (err){
    throw err;
    });
  };

  return {
    getUsers: getUsers,
    createUser:  createUser,
    detailUser: detailUser,
    deleteUser: deleteUser,
    updateUser: updateUser,
    cercaUser : cercaUser
  }

})();
