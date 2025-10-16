let data = {
    "nom": "Google",
    "siège social": "Mountain View, Californie, États-Unis",
    "fondateurs": [
        {
            "nom": "Larry Page",
            "naissance": "26 mars 1973",
            "lieu": "East Lansing, Michigan, États-Unis"
        },
        {
            nom: "Sergey Brin",
            naissance: "21 août 1973",
            lieu: "Moscou, Russie"
        },
    ],
    "chiffres d'affaires": {
        2008: 16.49,
        2012: 37.97,
        2016: 89.46,
        2018: 136.82
    }
};

console.log("Nom de la société :", data.nom);

console.log("Siège social :", data["siège social"]);

console.log("Fondateurs de la société : ");
for (let fondateur of data.fondateurs) {
    console.log(
        `${fondateur.nom}, né le ${fondateur.naissance} à ${fondateur.lieu}`
    );
};
console.log("Chiffres d'affaires de la société : ");
for (let annee in data["chiffres d'affaires"]) {
    console.log(
        `${annee} : ${data["chiffres d'affaires"][annee]}  milliards de dollars`
    );
};