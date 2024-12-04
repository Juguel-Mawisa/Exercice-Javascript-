const reponse = ["maman", "papa", "oncle", "ami"];
const rechercherTache = "oncle";

    function verifierExistence(tableau, element) {
    let existe = false;
    for (let i = 0; i < tableau.length; i++) {
        if (tableau[i] === element) {
            existe = true;
            break;
        }
    }
    return existe;
}

function afficherResultat(elementId, message) {
    document.getElementById(elementId).innerHTML = message;
}

const existe = verifierExistence(reponse, rechercherTache);
if (existe) {
    afficherResultat('ferto', "La tâche '" + rechercherTache + "' existe dans le tableau.");
} else {
    afficherResultat('ferto', "La tâche '" + rechercherTache + "' n'existe pas dans le tableau.");
}
