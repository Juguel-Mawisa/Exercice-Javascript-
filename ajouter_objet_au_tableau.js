
let etudiant = [];

const conteneurTaches = document.getElementById("taches");
const formTache = document.getElementById("formTache");
const inputDescription = document.getElementById("description");
const selectStatus = document.getElementById("status");

function afficherTaches() {

  conteneurTaches.innerHTML = "";

  etudiant.forEach((tache, index) => {
    conteneurTaches.innerHTML += `
      <div class="tache">
        <p><strong>${tache.description}</strong> (${tache.status})</p>
        
      </div>
    `;
  });
}


formTache.addEventListener("submit", (e) => {
  e.preventDefault(); 

  const tache = {
    id: etudiant.length + 1,
    description: inputDescription.value,
    status: selectStatus.value,
  };

  etudiant.push(tache);

  afficherTaches();

  formTache.reset();
});

