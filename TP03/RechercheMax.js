let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

// On initialise max avec le premier élément
let max = array[0];

// On parcourt le tableau
for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
        max = array[i]; // mise à jour si on trouve un élément + grand
    }
}

console.log("Le plus grand élément est :", max);
