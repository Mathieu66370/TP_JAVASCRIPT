function chargerDonnees() {
  let req = new XMLHttpRequest();

  req.onreadystatechange = function() {
    if (req.readyState === 4 && req.status === 200) {
      let data = JSON.parse(req.responseText);

      let html = '';

      for (let i = 0; i < data.length; i++) {
        let nomPays = data[i].name;
        let capitale = data[i].capital || 'N/A';
        let population = data[i].population;
        let region = data[i].region || 'N/A';

        html += `Pays : ${nomPays}, Capitale : ${capitale}, Population : ${population}, Région : ${region}<br>`;
      }

      document.getElementById("resultat").innerHTML = html;
    }
  };

  req.open("GET", "https://restcountries.com/v2/all?fields=name,languages,region,flag,population,currencies", true);
  req.send();
}
