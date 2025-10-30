function majPremiereLettre(chaine) {
  if (typeof chaine !== "string") {
    return "Erreur : le paramètre doit être une chaîne de caractères.";
  }
  return chaine[0].toUpperCase() + chaine.slice(1);
}

function majMots(chaine) {
  if (typeof chaine !== "string") {
    return "Erreur : le paramètre doit être une chaîne de caractères.";
  }
  let mots = chaine.split(" ");
  for (let i = 0; i < mots.length; i++) {
    mots[i] = majPremiereLettre(mots[i]);
  }
  return mots.join(" ");
}

let phrase = "bonjour tout le monde";

console.log(majMots(phrase));
console.log(majMots(12)); 
