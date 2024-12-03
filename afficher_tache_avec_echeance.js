const monTabeau = {
    title: "Finaliser la tâche",
    date: "2024-12-01",
  };
  
     function afficherTache(tache) {
    const formaterDate = new Date(tache.date).toLocaleDateString("fr-FR");
    console.log(`Tâche : ${tache.title}`);
    console.log(`Date d'échéance : ${formaterDate}`);
  }
  
  
  afficherTache(monTabeau);
  