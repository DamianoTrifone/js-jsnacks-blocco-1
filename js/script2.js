// Snack #4:
// Generatore di “nomi cognomi” casuali: scrivere una funzione che, partendo da una lista di nomi e una lista di cognomi, generi una coppia nome-cognome casuale, così da permettere al signor Gatsby di costruire una falsa lista di 10 invitati alla sua festa, da stampare in pagina, utilizzando il tag adatto alle liste.
// Snack #5:
// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari (verifichiamolo con una funzione) inseriscilo nell’array.
// Stampa l'array nella console.

// Snack 5
numeri = [];

for(var i=0; i < 6; i++) {
    var inserito = parseInt(prompt("Inserisci un numero"));
    
if (inserito % 2 == 0){
    // console.log(inserito, "pari");
} else{
    numeri.push(inserito);
}  
}
console.log(numeri);