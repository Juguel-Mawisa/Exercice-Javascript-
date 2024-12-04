
const tache = [
  "savoir",
  "jouer le ballon",
  "dormir"
];

function trouverPlusGrandeTache(tableau) {
  return tableau.reduce((max, tache) => {
    return tache.length > max.length ? tache : max;
  }, "");
}

const plusGrandeTache = trouverPlusGrandeTache(tache);
console.log("La plus grande tâche est :", plusGrandeTache);

  
