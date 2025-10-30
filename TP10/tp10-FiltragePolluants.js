let data = null;

function chargerDonnees() {
  let req = new XMLHttpRequest();

  req.onreadystatechange = function() {
    if (req.readyState === 4 && req.status === 200) {
      data = JSON.parse(req.responseText);

      // Affichage du titre et de l'année
      document.getElementById("titre").textContent = data.polluant + " (" + data.unite + ")";
      document.getElementById("annee").textContent = data.annee;

      afficherPays(data.pays);
    }
  };

  req.open("GET", "https://digicode.cleverapps.io/json/pays/pollution", true);
  req.send();
}

function afficherPays(liste) {
  let texte = "";

  for (let i = 0; i < liste.length; i++) {
    texte += liste[i].nom + " : " + liste[i].valeur + " " + data.unite +
      " (" + liste[i].pourcentage + "%)" + "<br>";
  }

  document.getElementById("listePays").innerHTML = texte;
}

function filtrer() {
  if (!data) return;

  let min = document.getElementById("min").value;
  let max = document.getElementById("max").value;

  // Valeurs par défaut
  min = min === "" ? 0 : Number(min);
  max = max === "" ? Number.MAX_VALUE : Number(max);

  // Vérifications
  if (min < 0 || max < 0) {
    alert("Veuillez saisir des valeurs positives.");
    return;
  }

  if (min > max) {
    alert("Le MIN ne peut pas être supérieur au MAX.");
    return;
  }

  // Filtrage
  let paysFiltres = data.pays.filter(p => p.valeur >= min && p.valeur <= max);

  afficherPays(paysFiltres);
}
