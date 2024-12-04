
const taches = [
    { id: 1, title: "Faire les courses", date: "2024-11-28", completed: false },
    { id: 2, title: "Finaliser le rapport",date: "2024-12-01", completed: true },
    { id: 3, title: "Préparer la réunion", date: "2024-12-05", completed: false }
];


function afficherTaches(taches) {
    const container = document.getElementById("bbb");

    if (taches.length === 0) {
        container.innerHTML = "<p>Aucune tâche disponible.</p>";
        return;
    }

    container.innerHTML = taches.map((tache) => {
        const dateFormatee = new Date(tache.date).toLocaleDateString("fr-FR");
        const statut = tache.completed ? "Terminée" : "En cours";

        return `
            <div id="contenair" id="tache-${tache.id}">
                <p><strong>Tâche :</strong> ${tache.title}</p>
                <p><strong>Date d'échéance :</strong> ${dateFormatee}</p>
                <p><strong>Statut :</strong> ${statut}</p>
                <button onclick="supprimerTache(${tache.id})">Supprimer</button>
                <hr>
            </div>
        `;
    }).join(''); 
}

function supprimerTache(id) {
    const index = taches.findIndex((tache) => tache.id === id);
    if (index !== -1) {
        taches.splice(index, 1); 
        afficherTaches(taches); 
    } else {
        alert("Tâche introuvable !");
    }
}

afficherTaches(taches);
