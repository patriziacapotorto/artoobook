var Users = (function () {
	var creaUtente = function (data) {

		return $.ajax({
			url: 'http://localhost:3003/users',
			method: 'POST',
      contentType: "application/json",
      dataType:"json",
      data: JSON.stringify(data)
    }).then(function(response){
      console.log(response);
    }).catch(function(err){
      console.log(err);
    });
	}

  var getUsers = function () {
		return $.ajax({
			url: 'http://localhost:3003/users',
			method: 'GET',
      contentType: "application/json",
      dataType:"json"
    });
	}

  var deleteUsers= function (id) {
		return $.ajax({
      url:'http://localhost:3003/users/id/'+id,
      method: "DELETE",
      contentType: "application/json",
      dataType:"json"
    });
	}

  var updateUser = function (id) {
		return $.ajax({
      url:'http://localhost:3003/users/id/'+id,
      method: "GET",
      contentType: "application/json",
      dataType:"json"
    });
	}

  var salvaUtenteAggiornato = function(id,data){
    return $.ajax({
      url:'http://localhost:3003/users/id/'+id,
      method: "PUT",
      contentType: "application/json",
      dataType:"json",
      data: JSON.stringify(data)
    });
  }

	return {
		creaUtente: creaUtente,
    getUsers: getUsers,
    deleteUsers:deleteUsers,
    updateUser: updateUser,
    salvaUtenteAggiornato: salvaUtenteAggiornato
	}
})();
