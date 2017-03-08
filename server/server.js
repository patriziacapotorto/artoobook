var express = require('express');
var app = express(); //lancio express
var path = require('path');

// var mongoose = require('mongoose');
// //connessione al database
// mongoose.connect('mongodb://admin:admin@ds123400.mlab.com:23400/artoo', function(err){
//   if(err){console.log(err);}else{console.log("connesso");}
// });





// app.get('/', function(req,res){
//   res.send("ciao");
// });

app.listen(3002, function(){
  console.log("server in ascolto su http://localhost:3002");
});
