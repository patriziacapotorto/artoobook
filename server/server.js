var express = require('express');
var app = express(); //lancio express
var path = require('path');

//la connessione al database è rimandata al database.js
var mongoose = require('mongoose');
require('./config/database.js')(mongoose);
require('./routes/routes.js')(app, express, path);

app.listen(3003, function(){
  console.log("server in ascolto su http://localhost:3003");
});
//collegamenti per bootstrap
// app.use('/jquery',express.static(path.join(__dirname,"..","node_modules","jquery","dist")));
// app.use('/bootstrap',express.static(path.join(__dirname,"..","node_modules","bootstrap","dist")));
