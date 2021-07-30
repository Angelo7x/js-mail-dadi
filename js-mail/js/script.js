//Creo lista email disponibili.
var email = ["pippo007@gmail.com" , "pluto007@gmail.com" , "ciccio007@libero.it" , "angelo007@gmail.com" , "topo007@gmail.com"];
// Chiedi email Utente
var emailutente = (prompt("Inserisci la tua email"));
console.log(emailutente)
// controllo email inseriita sulla lista disponibile
if ( emailutente == email ) {
    alert ( Accesso consentito);
} else if {
    alert ( Accesso negato );
}
// Se l'email inserita è presente nella lista stampare si , altrimenti no