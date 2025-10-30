let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

// Afficher les entiers supérieurs à 3
console.log("Entiers supérieurs à 3 :");
for (let i = 0; i < array.length; i++) {
    if (array[i] > 3) {
        console.log(array[i]);
    }
}

console.log("\nEntiers pairs :");
//Afficher les entiers pairs
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        console.log(array[i]);
    }
}

console.log("\nValeurs aux index pairs :");
//Afficher les valeurs correspondant aux index pairs
for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
        console.log(array[i]);
    }
}

console.log("\nEntiers impairs :");
//Afficher les entiers impairs
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
        console.log(array[i]);
    }
}

