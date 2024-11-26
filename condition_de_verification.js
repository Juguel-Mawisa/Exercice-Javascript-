const reponse = [ "maman", "papa", "oncle", "ami" ];
const rechercherTache = "oncle";
const existe = reponse.includes(rechercherTache);

    if (existe) {
    document.getElementById('ferto').innerHTML = "La tâche '" + rechercherTache+ "' existe dans le tableau.";
} else {
    document.getElementById('ferto').innerHTML = "La tâche '" + rechercherTache + "' n'existe pas dans le tableau.";
}