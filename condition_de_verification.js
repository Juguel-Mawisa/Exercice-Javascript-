const reponse = ["maman", "papa", "oncle", "ami"];

    function verifierExistence(tableau, valeur, elementId) {
  const existe = tableau.includes(valeur);

  if (existe) {
        document.getElementById(elementId).innerHTML =
      "La tâche '" + valeur + "' existe dans le tableau.";
  } else {
    document.getElementById(elementId).innerHTML =
      "La tâche '" + valeur + "' n'existe pas dans le tableau.";
  }
}

const rechercherTache = "oncle";
verifierExistence(reponse, rechercherTache, "ferto");
