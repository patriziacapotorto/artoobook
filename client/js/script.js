$(document).ready(function () {

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
});

});
