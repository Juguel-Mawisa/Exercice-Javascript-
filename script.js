function verifierNombre() {
    let reponse = parseInt(document.getElementById('userInput').value);
    if (reponse === 42) {
        document.getElementById('demo').innerHTML = "La réponse est 42 !";
    } else {
        document.getElementById('demo').innerHTML = "La réponse saisie est " + reponse + ", ce n'est pas 42.";
    }
}




