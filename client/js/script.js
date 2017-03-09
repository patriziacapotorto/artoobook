$(document).ready(function () {

   function disegna(){
    Users.getUsers().then(function(data){
      var tr = " ";
         for (var i = 0; i < data.length; i++) {
             tr += '<tr id="riga' + i + '">' +
                 '<td>' + data[i].nome + '</td>' +
                 '<td>' + data[i].cognome + '</td>' +
                 '<td>' + data[i].sesso + '</td>' +
                 '<td>' + data[i].eta + '</td>' +
                 '<td><span idutente="'+data[i]._id+'" class="glyphicon glyphicon-trash elimina" style="cursor: pointer"></span></td>'+
                 '<td><span idutente="'+data[i]._id+'" class="glyphicon glyphicon-pencil modifica" style="cursor: pointer"></span></td>'+
                 // '<td><button onclick="modifica(' + film[i].imdbID+ ');">Modifica</button></td>'+
                 // '<td><button onclick="cancella(' + film[i].imdbID + ');">Elimina</button></td>'
             '</tr>'
          };
         $("#tbody").html(tr);
         $("#formMia").hide();
         $(".tabmia").show();
         $(".elimina").click(function(){
          var id = $(this).attr("idutente");
          elimina(id);
          });

          $(".modifica").click(function(){
           var id = $(this).attr("idutente");
           modifica(id);
           });
   }).catch();
  }

$("#btn_crea").click(function(){
  $("#formMia").show();
  $(".tabmia").hide();
  $("#formMia").submit(function (e) {
     e.preventDefault();
    //  var nome = $('#nome').val();
     var nome = this.nome.value;
     var cognome = this.cognome.value;
     var sesso = this.sesso.value;
     var eta = this.eta.value;

     var nuovo = {
       nome: nome,
       cognome: cognome,
       sesso: sesso,
       eta: eta
     }
     Users.creaUtente(nuovo);
     //  SVUOTO I CAMPI DELLA FORM
     this.reset();
     $("#formMia").hide();
     $(".tabmia").show();
     disegna();
  });

});

function modifica(id){
  $("#aggiornaForm").show();
  Users.updateUser(id).then(function(data){
        $(".tabmia").hide();
        $('#nome1').val(data.nome);
        $('#cognome1').val(data.cognome);
        $("#aggiornaForm [name=sesso1]").val(data.sesso);
        $('#eta1').val(data.eta);

        $("#aggiornaForm").submit(function (e) {
           e.preventDefault();
          //  var nome = $('#nome').val();
           var nome = this.nome1.value;
           var cognome = this.cognome1.value;
           var sesso = this.sesso1.value;
           var eta = this.eta1.value;

           var aggiornato = {
             nome: nome,
             cognome: cognome,
             sesso: sesso,
             eta: eta
           }
           $("#aggiornaForm").hide();
           Users.salvaUtenteAggiornato(id,aggiornato).then(function(data){
               console.log(data);
           }).catch();
           $(".tabmia").show();
           location.reload();
        });

  }).catch(function(err){
  console.log(err);
});
}

  function elimina(id){
    Users.deleteUsers(id).then(function(data){
      console.log(data);
      disegna();
    }).catch(function(err){
      console.log(err);
    });
   }

  disegna();
});
