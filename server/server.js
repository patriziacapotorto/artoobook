var express = require('express');
var app = express(); //lancio express
var path = require('path');

// var mongoose = require('mongoose');
// //connessione al database
// mongoose.connect('mongodb://admin:admin@ds123400.mlab.com:23400/artoo', function(err){
//   if(err){console.log(err);}else{console.log("connesso");}
// });

//collegamenti per bootstrap
// app.use('/jquery',express.static(path.join(__dirname,"..","node_modules","jquery","dist")));
// app.use('/bootstrap',express.static(path.join(__dirname,"..","node_modules","bootstrap","dist")));



app.get('/', function(req,res){
  res.sendFile(path.join(__dirname,"..","client","index.html"));
});

app.listen(3002, function(){
  console.log("server in ascolto su http://localhost:3002");
});
