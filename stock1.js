/* var intitule;
var nomFamille;
var prenom;
var mail; */
var cordonnesPersonnes = new Array();

function ecritureLocalStorage() {
    if (typeof localStorage != "undefined" && JSON) {
        var cordonnesPersonne = {
            nom: document.getElementById("fName").value,
            prenom: document.getElementById("lName").value,
            mail: document.getElementById("eMail").value
        }
        cordonnesPersonnes.push(cordonnesPersonne);
        localStorage.setItem("identite", JSON.stringify(cordonnesPersonnes));
        //console.log(cordonnesPersonnes);
        document.getElementById("fName").innerHTML = localStorage.getItem(identite[0].nom);
    }
}

function lectureLocalStorage() {
    if (typeof localStorage != "undefined" && JSON) {
        /* var cordonnesPersonnes = {
              nom: document.getElementById("nom").value,
              prenom: document.getElementById("prenom").value,
              mail: document.getElementById("mail").value
          }*/
        var cordonnesPersonnes = JSON.parse(localStorage.getItem("identite"));
        document.getElementById("fName").value = cordonnesPersonnes.nom;
        document.getElementById("lName").value = cordonnesPersonnes.prenom;
        document.getElementById("eMail").value = cordonnesPersonnes.mail;


        console.log(cordonnesPersonnes);
    }
}

function suppressionLocalStorage() {
    if (typeof localStorage != "undefined" && JSON) {
        var cordonnesPersonnes = {
            nom: document.getElementById("fName").value,
            prenom: document.getElementById("lName").value,
            mail: document.getElementById("eMail").value
        }
        localStorage.removeItem("identite");
        alert("Votre donnée est bien supprimé");
        console.log(cordonnesPersonnes);
    }
}



/* 
function lectureLocalStorage() {
    if (typeof localStorage != "undefined") {
        nomFamille = localStorage.getItem("nomFamille");
        prenom = localStorage.getItem("prenom");
        mail = localStorage.getItem("mail");
        intitule = "Contenue do local Storage";
        document.getElementById("intitule").innerHTML = "Lecture des données";
        document.getElementById("nomFamille").innerHTML = nomFamille;
        document.getElementById("prenom").innerHTML = prenom;
        document.getElementById("mail").innerHTML = mail;

    } else {

    }
}

function suppressionLocalStorage() {
    if (typeof localStorage != "undefined") {
        localStorage.removeItem("nomFamille");
        localStorage.removeItem("prenom");
        localStorage.removeItem("mail");
        intitule = "Contenue do local Storage";
        document.getElementById("intitule").innerHTML = "Les variables local storage sont supprimés";
        document.getElementById("nomFamille").innerHTML = "";
        document.getElementById("prenom").innerHTML = "";
        document.getElementById("mail").innerHTML = "";
    } else {

    }
} */