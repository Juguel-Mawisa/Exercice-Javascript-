function afficherTache(tache) {
    const formanterDate = new Date(tache.date).toLocaleDateString("fr-FR");
    return `<p><strong>Tâche :</strong> ${tache.title}</p>
         <p><strong>Date d'échéance :</strong> ${formanterDate}</p>`;
}

const tache = { title: "Finaliser la tache", date: "2024-12-03" };

document.getElementById("lll").innerHTML = afficherTache(tache);