var express = require('express');
var app = express(); //lancio express
var path = require('path');

var mongoose = require('mongoose');
// //connessione al database
mongoose.connect('mongodb://admin:admin@ds123410.mlab.com:23410/artoobook', function(err){
  if(err){console.log(err);}else{console.log("connesso al db");}
});

//collegamenti per bootstrap
// app.use('/jquery',express.static(path.join(__dirname,"..","node_modules","jquery","dist")));
// app.use('/bootstrap',express.static(path.join(__dirname,"..","node_modules","bootstrap","dist")));

app.use('/js',express.static(path.join(__dirname,"..","client","js")));
app.use('/css',express.static(path.join(__dirname,"..","client","css")));

app.get('/', function(req,res){
  res.sendFile(path.join(__dirname,"..","client","index.html"));
});

app.listen(3002, function(){
  console.log("server in ascolto su http://localhost:3002");
});
