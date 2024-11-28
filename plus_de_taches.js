function afficherTaches(taches) {
    return taches.map((tache) => {
        const formanterDate = new Date(tache.date).toLocaleDateString("fr-FR");
        const statut = tache.completed ? "Terminée" : "En cours";

        return `<div>
            <p><strong>Tâche :</strong> ${tache.title}</p>
            <p><strong>Date d'échéance :</strong> ${formanterDate}</p>
            <p><strong>Statut :</strong> ${statut}</p>
            <hr>
        </div>`;
    }).join('');
}

const taches = [
    { title: "Finaliser le rapport", dueDate: "2024-12-01", completed: true },
    { title: "Faire les courses", dueDate: "2024-11-28", completed: false },
    { title: "Appeler le médecin", dueDate: "2024-12-05", completed: true }
];

document.getElementById("lll").innerHTML = afficherTaches(taches);