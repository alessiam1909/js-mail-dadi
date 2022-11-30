// Creo la variabile per il bottone invio che invii la mail dell'utente

const button = document.getElementById("button");

button.addEventListener ('click', function(){

    // creo la variabile che recuper il valore della mail scritta dall'utente
    let mail = document.getElementById("email").value;


    // Creo l'array che contenga la lista delle mail accettate
    const mailList = ["ale.menon.vr@gmail.com", "boolean.careers@gmail.com", "alessia@gmail.com", "ciao@gmail.com", "esercizio@gmail.com"];

    let found = false;

    for (let i=0 ; i < mailList.length && !found; i++){
       const mailUtente = mailList[i];

       if(mailUtente == mail)
           found = true;

    }

    if(found == true){
        console.log("la tua email è valida");
    } else {
        console.log("la tua email non è valida!");
        alert("La mail non è valida, riprova");
    }



});