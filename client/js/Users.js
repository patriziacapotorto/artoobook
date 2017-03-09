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

	return {
		creaUtente: creaUtente
	}
})();
