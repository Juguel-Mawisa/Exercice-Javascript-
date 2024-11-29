
let etudiant = [];

const conteneurTaches = document.getElementById("taches");
const formTache = document.getElementById("formTache");
const inputDescription = document.getElementById("description");
const selectStatus = document.getElementById("status");

function afficherTaches() {
  conteneurTaches.innerHTML = "";

  etudiant.forEach((tache) => {
    conteneurTaches.innerHTML += `
      <div class="tache">
        <p><strong>${tache.description}</strong> (${tache.status})</p>
      </div>
    `;
  });
}

formTache.addEventListener("submit", (e) => {
  e.preventDefault(); 

  const nouvelleTache = {
    id: etudiant.length + 1,
    description: inputDescription.value.trim(),
    status: selectStatus.value,
  };

  const existeDeja = etudiant.some(
    (tache) => tache.description === nouvelleTache.description && tache.status === nouvelleTache.status
  );

  if (existeDeja) {
    alert("Cette tâche existe déjà !");
  } else {
    etudiant.push(nouvelleTache);
    afficherTaches();
    formTache.reset();
  }
});


