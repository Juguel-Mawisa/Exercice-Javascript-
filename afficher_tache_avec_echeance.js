const task = {
    title: "Finaliser la tache",
    date: "2024-12-01"
};

const formanterDate = new Date(task.date).toLocaleDateString("fr-FR");

console.log(`Tâche : ${task.title}`);
console.log(`Date d'échéance : ${formanterDate}`);