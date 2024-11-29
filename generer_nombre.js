function genererChiffreAleatoire() {
    return Math.ceil(Math.random() * 1000);
}

function renvoyerLePlusGrandNombre(premierNombre, deuxiemeNombre) {
    if (premierNombre > deuxiemeNombre) {
        document.getElementById('resultat').innerHTML = `${premierNombre} est plus grand que ${deuxiemeNombre}`;
    } else {
        document.getElementById('resultat').innerHTML = `${deuxiemeNombre} est plus grand que ${premierNombre}`;
    }
}

const premierNombre = genererChiffreAleatoire();
const deuxiemeNombre = genererChiffreAleatoire();

document.getElementById('nombre1').innerHTML = `Premier nombre : ${premierNombre}`;
document.getElementById('nombre2').innerHTML = `Deuxième nombre : ${deuxiemeNombre}`;

renvoyerLePlusGrandNombre(premierNombre, deuxiemeNombre);
