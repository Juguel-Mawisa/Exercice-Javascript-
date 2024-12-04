let etudiant = [];

function ajouterTache(description, status) {
  const nouvelleTache = {
    id: etudiant.length + 1,
    description: description,
    status: status,
  };

  tableauTaches.push(nouvelleTache);
  console.log("Tâche ajoutée :", nouvelleTache);
  afficherTaches();
}

    function afficherTaches() {
  console.clear();
  console.log("Liste des tâches :");
  etudiant.forEach((tache) => {
    console.log(`ID: ${tache.id}, Description: ${tache.description}, Status: ${tache.status}`);
  });
}


function modifierTache(id, nouvelleDescription, nouveauStatus) {
  const tache = etudiant.find((t) => t.id === id);
  if (tache) {
    console.log("Avant modification :", tache);
    tache.description = nouvelleDescription;
    tache.status = nouveauStatus;
    console.log("Après modification :", tache);
  } else {
    console.warn(`Tâche avec l'ID ${id} non trouvée.`);
  }
  afficherTaches();
}