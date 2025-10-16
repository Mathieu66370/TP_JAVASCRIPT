let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

// Calcul de la somme
let sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// Calcul de la moyenne
let average = sum / array.length;


console.log("La moyenne des éléments du tableau est :", average);
