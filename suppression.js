const table = [1, 4, 8];

function retirerDernierElement(tableau, elementId) {
  tableau.pop(); 
  const element = document.getElementById(elementId);
  element.innerHTML = "Le nouveau tableau est : " + tableau.join(", ");
}

retirerDernierElement(table, "ferto");
