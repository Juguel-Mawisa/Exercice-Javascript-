const table = ["tache1", "tache2", "tache3"];
table.push("football", "tennis");
document.getElementById('ferto').innerHTML = "Le tableau actuel est : " + table.join(", ");
