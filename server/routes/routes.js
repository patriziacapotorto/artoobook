module.exports= function(app, express, path){
app.use('/js',express.static(path.join(__dirname,"..","..","client","js")));
app.use('/css',express.static(path.join(__dirname,"..","..","client","css")));
app.get('/', function(req,res){
  res.sendFile(path.join(__dirname,"..","..","client","index.html"));
});
var users = require('./../users/index.js');
app.use('/users',users);
};
