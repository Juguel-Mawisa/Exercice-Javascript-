const array = [ "table", "chaise", "couteau"];
array[ 1 ]= "chemise";
document.getElementById('ferto').innerHTML = "Le nouveau tableau est : " + array.join(", ");
