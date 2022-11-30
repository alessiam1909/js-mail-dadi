// Chiedo all'utente di inserire un numero da 1 a 6

let numUtente = prompt("Inserisci un numero da 1 a 6:");
console.log(numUtente);


//  Se il numero è maggiore a 6 non prosegue con il calcolo
if (numUtente > 6 || numUtente < 1){
    console.log("Il numero inserito è maggiore di 6 o minore di 1");
    alert("Il numero inserito è maggiore di 6 o minore di 1, riprova");
}
//  Genero un numero randomico da 1 a 6 per il computer
let numComputer = Math.floor(Math.random() * 6)+ 1;
console.log(numComputer);

// Se il numero è minore di 6 ma maggiore di 0 prosegue con il calcolo
if(numUtente < 7 && numUtente > 0){


    // Se il numero utente è maggiore del numero pc l'utente ha vinto, altrimenti vince il pc
    if(numUtente > numComputer ){
        console.log("Hai vinto!");
        alert("Hai vinto!");
    } else {
        console.log("Hai perso!");
        alert("Hai perso!");
    };
}

