function verifierTableau(tab) {
  if (!tab.every(element => typeof element === "number")) {
    return "Erreur : le tableau contient un élément non numérique.";
  }
  return "Tous les éléments sont des nombres.";
}

// Tests
let tab1 = [1, 2, 3, 4, 5];
console.log(verifierTableau(tab1));

let tab2 = [1, "hello", 3, 4];
console.log(verifierTableau(tab2));

let tab3 = [];
console.log(verifierTableau(tab3));

let tab4 = ["bonjour", "hello", "salut"];
console.log(verifierTableau(tab4));


