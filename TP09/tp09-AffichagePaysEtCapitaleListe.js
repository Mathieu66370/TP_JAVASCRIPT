let data = [];
let triPopulation = "none";

function chargerDonnees() {
  let req = new XMLHttpRequest();

  req.onreadystatechange = function() {
    if (req.readyState === 4 && req.status === 200) {
      data = JSON.parse(req.responseText);
      afficherTableau(data);
    }
  };

  req.open("GET", "https://restcountries.com/v2/all?fields=name,capital,population,region", true);
  req.send();
}

function afficherTableau(donnees) {
  let html = `
    <table border="1" cellspacing="0" cellpadding="5">
      <thead>
        <tr>
          <th>Pays</th>
          <th>Capitale</th>
          <th id="populationHeader" style="cursor:pointer;" onclick="trierParPopulation()">
            Population 
            <i id="iconeTri" class="fa-solid fa-arrows-up-down"></i>
          </th>
          <th>Région</th>
        </tr>
      </thead>
      <tbody>
  `;

  for (let i = 0; i < donnees.length; i++) {
    let nomPays = donnees[i].name;
    let capitale = donnees[i].capital || 'N/A';
    let population = donnees[i].population;
    let region = donnees[i].region || 'N/A';

    html += `
      <tr>
        <td>${nomPays}</td>
        <td>${capitale}</td>
        <td>${population.toLocaleString('fr-FR')}</td>
        <td>${region}</td>
      </tr>
    `;
  }

  html += `
      </tbody>
    </table>
  `;

  document.getElementById("resultat").innerHTML = html;
}

function trierParPopulation() {
  if (triPopulation === "none" || triPopulation === "desc") {

    data.sort((a, b) => a.population - b.population);
    triPopulation = "asc";
    document.getElementById("iconeTri").className = "fa-solid fa-arrow-up";
  } 
  else if (triPopulation === "asc") {

    data.sort((a, b) => b.population - a.population);
    triPopulation = "desc";
    document.getElementById("iconeTri").className = "fa-solid fa-arrow-down";
  }

  afficherTableau(data);

  const icone = document.getElementById("iconeTri");
  if (icone) {
    if (triPopulation === "none") icone.className = "fa-solid fa-arrows-up-down";
    else if (triPopulation === "asc") icone.className = "fa-solid fa-arrow-up";
    else if (triPopulation === "desc") icone.className = "fa-solid fa-arrow-down";
  }
}
