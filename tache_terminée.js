const myTable = { title: "preparer la nourriture", status: "terminée" };

function verifierStatutTache(tache) {
  if (tache.status === "terminée") {
    console.log("La tâche est terminée !");
  } else {
    console.log("La tâche n'est pas encore terminée.");
  }
}

verifierStatutTache(myTable);
