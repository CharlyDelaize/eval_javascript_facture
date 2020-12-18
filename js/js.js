function myFunction() {
    window.print();
}

// HEADER - Formulaire

function copyContent(societe, societe2){
    var copied = document.getElementById(societe);
    var receiver = document.getElementById(societe2);
    receiver.value = copied.value;
}

function copyContent(nom, nom2){
    var copied = document.getElementById(nom);
    var receiver = document.getElementById(nom2);
    receiver.value = copied.value;
}

function copyContent(telephone, telephone2){
    var copied = document.getElementById(telephone);
    var receiver = document.getElementById(telephone2);
    receiver.value = copied.value;
}

function copyContent(email, email2){
    var copied = document.getElementById(email);
    var receiver = document.getElementById(email2);
    receiver.value = copied.value;
}

// HEADER - Facture

/* var ladate=new Date()
document.write("Nous sommes le : ");
document.write(ladate.getDate()+"/"+(ladate.getMonth()+1)+"/"+ladate.getFullYear()); */

/* function getDate(
    var ladate = new Date()
    document.write(ladate.getDate());
    document.write(ladate.getMonth()+1);
    document.write(ladate.getFullYear());
) */

// TABLEAU

/* var hidden1 = document.getElementsByClassName(ecran);
var hidden2 = document.getElementsByName(prixEcran);
hidden1.addEventListener("click", () => {
    if(getComputedStyle(ecran).visibility = "hidden"){
        ecran.style.visibility = "visible";
    }
}); */

//TABLEAU MONTANT DEMANDE
