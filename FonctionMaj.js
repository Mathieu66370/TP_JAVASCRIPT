function majPremiereLettre(chaine) {
  if (typeof chaine !== "string") {
    return "Erreur : le paramètre doit être une chaîne de caractères.";
  }
  return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}

// Tests
console.log(majPremiereLettre("Bonjour"));

