module.exports = (function (){

  var getUsers = function(req,res){
    res.send('lista utenti');
  };

  var createUser = function(req,res){
    res.send('Creazione utente');
  };

  var detailUser = function(req,res){
    var id = req.params.id;
    res.send('Dettaglio utente con id: '+id);
  };

  var deleteUser = function(req,res){
    var id = req.params.id;
    res.send('Eliminazione utente con id: '+id);
  };
  var updateUser = function(req,res){
    var id = req.params.id;
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
