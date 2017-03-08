module.exports = (function (){

  var getUsers = function(req,res){
    res.send('utenti');
  };
  return {
    getUsers: getUsers
  }
  
})();
