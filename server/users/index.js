var express = require('express');
var router = express.Router();

var Users = require('./users.controller.js');

//LISTA UTENTI
router.get('/', Users.getUsers);

//CREAZIONE UTENTI
router.post('/', Users.createUser);

//DETTAGLIO UTENTE
router.get('/id/:id', Users.detailUser);

//ELIMINA UTENTE
router.delete('/id/:id', Users.deleteUser);

//AGGIORNO UTENTE
router.put('/id/:id', Users.updateUser);

//RICERCA PER NOME O COGNOME
router.get('/cerca/', Users.cercaUser);

module.exports = router;
