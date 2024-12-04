
let tableauTaches = [];
function ajouterTache(description, status) {
  const nouvelleTache = {
    id: tableauTaches.length + 1,
    description: description,
    status: status,
  };

  tableauTaches.push(nouvelleTache);
  console.log("Tâche ajoutée :", nouvelleTache);
  afficherTaches(); 
}

        function afficherTaches() {
  console.clear(); 
  console.log("Tableau des tâches :");
  console.table(tableauTaches); 
}

ajouterTache("Apprendre JavaScript", "en cours");
ajouterTache("Créer un projet", "à faire");
ajouterTache("Réviser les bases", "terminé");
