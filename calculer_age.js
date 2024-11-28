function calculerAge(anneeNaissance) {
    const anneeActuelle = new Date().getFullYear(); 
    const age = anneeActuelle - anneeNaissance; 
    return age;
}

const anneeNaissance = 1990;
const age = calculerAge(anneeNaissance);

console.log(`L'âge de la personne née en ${anneeNaissance} est : ${age} ans.`);
