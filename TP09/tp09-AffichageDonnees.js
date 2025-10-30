function chargerDonnees() {

  let req = new XMLHttpRequest();


  req.onreadystatechange = function() {

    if (req.readyState === 4 && req.status === 200) {

      let data = JSON.parse(req.responseText);

      document.getElementById("resultat").textContent = JSON.stringify(data, null, 2);
    }
  };


  req.open("GET", "https://restcountries.com/v2/all?fields=name,languages,region,flag,population,currencies", true);


  req.send();
}
