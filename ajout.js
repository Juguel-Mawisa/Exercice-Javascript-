const table = ["tache1", "tache2", "tache3"];

        function ajouterTaches(tableau, nouvellesTaches, elementId) {
  tableau.push(...nouvellesTaches); 
  const element = document.getElementById(elementId);
  element.innerHTML = "Le tableau actuel est : " + tableau.join(", ");
}


ajouterTaches(table, "ferto");

