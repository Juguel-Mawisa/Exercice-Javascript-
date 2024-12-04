const array = ["table", "chaise", "couteau"];

function mettreAJourElement(tableau, index, nouvelleValeur) {
  if (index >= 0 && index < tableau.length) {
    tableau[index] = nouvelleValeur; 
    return tableau;
  } else {
    return null; 
  }
}

function afficherTableau(tableau, elementId) {
  document.getElementById(elementId).innerHTML =
    "Le nouveau tableau est : " + tableau.join(", ");
}

const tableauMisAJour = mettreAJourElement(array, 1, "chemise");

if (tableauMisAJour) {
  afficherTableau(tableauMisAJour, "ferto");
} else {
  document.getElementById("ferto").innerHTML =
    "Index invalide. Aucun changement effectué.";
}

