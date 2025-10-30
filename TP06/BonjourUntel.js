function saluer(nom) {
  if (typeof nom !== "string") {
    return "Erreur : le paramètre doit être une chaîne de caractères.";
  }
  return "Bonjour " + nom;
}

let resultat1 = saluer("Marcel");
console.log(resultat1);

let resultat2 = saluer(42);
console.log(resultat2);

