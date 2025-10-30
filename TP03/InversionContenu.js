let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

// Création de arrayCopy dans l'ordre inverse
let arrayCopy = [...array].reverse();

// Affichage des éléments de array
console.log("Éléments du tableau original :");
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// Affichage des éléments de arrayCopy
console.log("Éléments du tableau inversé :");
for (let i = 0; i < arrayCopy.length; i++) {
    console.log(arrayCopy[i]);
}
