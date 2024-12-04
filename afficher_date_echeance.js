function calculerDateLimite(dateLimite) {
    const jour = new Date();
    const echeance = new Date(dateLimite);
    const diference = echeance - jour;
    const differenceJours = Math.ceil(diference / (1000 * 60 * 60 * 24));
    return differenceJours >= 0 ? differenceJours : 0;
}

const a = "2024-11-28"; 
const b = calculerDateLimite(a);

        document.getElementById('gg').textContent = `Il reste ${b} jour`;