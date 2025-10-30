// Déclarer la variable
let entier = 10;

// Variable pour stocker la somme
let somme = 0;

// Boucle pour additionner tous les nombres de 1 à entier
for (let i = 1; i <= entier; i++) {
    somme += i;  // équivalent à somme = somme + i
}

// Afficher le résultat
console.log("La somme de tous les nombres de 1 à", entier, "est :", somme);
