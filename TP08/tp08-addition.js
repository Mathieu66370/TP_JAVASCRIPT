function additionner() {

  let val1 = document.querySelector("#nb1").value;
  let val2 = document.querySelector("#nb2").value;

  let nb1 = Number(val1);
  let nb2 = Number(val2);

  if (isNaN(nb1) || isNaN(nb2)) {
    document.querySelector("#resultat").innerHTML = "Vous devez saisir un nombre !";
    document.querySelector("#resultat").style.color = "red";
  } else {
    let somme = nb1 + nb2;
    document.querySelector("#resultat").innerHTML = "Le résultat de l’addition est : " + somme;
  }
}

