const element = {
    title: "Finaliser la tâche",
    date: "2024-12-01",
  };
  
     function afficherTacheAvecSaDAteEcheance(tache) {
    const formaterDate = new Date(tache.date).toLocaleDateString("fr-FR");
    console.log(`Tâche : ${tache.title}`);
    console.log(`Date d'échéance : ${formaterDate}`);
  }
  
  
  afficherTacheAvecSaDAteEcheance(element);
  