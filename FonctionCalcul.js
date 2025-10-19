function somme(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Erreur : les paramètres doivent être des nombres.";
  }
  return a * b + a + b;
}

let resultat = somme(6, 5);
console.log("Le résultat est :", resultat);

