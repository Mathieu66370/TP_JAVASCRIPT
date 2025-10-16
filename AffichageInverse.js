let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

// Afficher tous les éléments du tableau avec une boucle
console.log("Éléments du tableau :");
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// Afficher tous les éléments dans l'ordre inverse
console.log("Éléments dans l'ordre inverse :");
for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
}

// Créer une copie du tableau
let arrayCopy = array.slice(); 
{
    console.log("Copie du tableau :", arrayCopy);
}


