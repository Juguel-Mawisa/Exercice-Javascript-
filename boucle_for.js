const reponse = [ "maman", "papa", "oncle", "ami" ];
const rechercherTache = "oncle";
let existe = false;

for (let i = 0; i < reponse.length; i++) {
    if (reponse[i] === rechercherTache) {
        existe = true;
        break; 
    }
}

if (existe) {
    document.getElementById('ferto').innerHTML = "La tâche '" + rechercherTache + "' existe dans le tableau.";
} else {
    document.getElementById('ferto').innerHTML = "La tâche '" + rechercherTache+ "' n'existe pas dans le tableau.";
}