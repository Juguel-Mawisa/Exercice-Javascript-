
const tableau = [
    "Savoir",
    "jouer le ballon",
    "dormir",
  ];
  
  function trouverPlusGrandeTache(tableau) {
    return tableau.reduce((max, tache) => {
      return tache.length > max.length ? tache : max;
    }, "");
  }
  
  const plusGrandeTache = trouverPlusGrandeTache(tableau);
  console.log("La plus grande tâche est :", plusGrandeTache);
  
