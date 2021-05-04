// Snack #4:
// Generatore di “nomi cognomi” casuali: scrivere una funzione che, partendo da una lista di nomi e una lista di cognomi, generi una coppia nome-cognome casuale, così da permettere al signor Gatsby di costruire una falsa lista di 10 invitati alla sua festa, da stampare in pagina, utilizzando il tag adatto alle liste.
// Snack #5:
// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari (verifichiamolo con una funzione) inseriscilo nell’array.
// Stampa l'array nella console.

// Snack 4

var nomi = ["Damiano","Carola","Fabio","Gabriele","Valeria"];
console.log(nomi);

var cognomi = ["Giuffrida", "Santonocito", "Pappalardo", "Cammarata", "Spoto"];
console.log(cognomi);


function nomeCasuale(nomi, cognomi) {
    var nomeCasuale = nomi[Math.floor(Math.random() * nomi.length)];
    var cognomeCasuale = cognomi[Math.floor(Math.random() * cognomi.length)];
    var invitato = nomeCasuale + " " + cognomeCasuale;
    return invitato;
}

for (var i=0; i<10; i++){
    var invitato = nomeCasuale(nomi, cognomi);
    document.getElementById("lista").innerHTML += "<li> Il signor " + invitato + " è invitato</li>";
}

