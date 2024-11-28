
const tableau = [
    "Savoir ",
    "jouer le ballon",
    "dormir",
];

const trouverLesGrand = tableau.reduce((max, tache) => {
    return tache.length > max.length ? tache : max;
}, "");

console.log("La plus grande tâche est :", trouverLesGrand);
