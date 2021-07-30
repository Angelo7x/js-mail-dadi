// Numero random giocatore e stampare
var dadoutente = Math.floor(Math.random() * 6) + 1;

alert("Questo è il numero utente: " +  dadoutente)
// Numero random CPU e stampare
var dadocpu = Math.floor(Math.random() * 6) + 1;

alert("Questo è il numero CPU: " +  dadocpu)
//Confrontare i due numeri e stampare

if (dadoutente > dadocpu) {
    alert("Il vincitore è Utente")
} else if ( dadocpu > dadoutente) {
    alert("Il vincitore è CPU")
}
// Dichiarare il vincitore con il numero più alto