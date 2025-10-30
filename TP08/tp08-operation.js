  function calculer() {
    let val1 = document.querySelector("#nb1").value;
      let val2 = document.querySelector("#nb2").value;
      let nb1 = Number(val1);
      let nb2 = Number(val2);


      if (isNaN(nb1) || isNaN(nb2)) {
        document.querySelector("#resultat").innerHTML = "Vous devez saisir un nombre !";
        document.querySelector("#resultat").style.color = "red";
        return;
      }

      let op = document.querySelector("#operateur").value;
      let resultat;
      let message = "";

      switch(op) {
        case "+":
          resultat = nb1 + nb2;
          message = "Le résultat de l’addition est : ";
          break;
        case "-":
          resultat = nb1 - nb2;
          message = "Le résultat de la soustraction est : ";
          break;
        case "*":
          resultat = nb1 * nb2;
          message = "Le résultat de la multiplication est : ";
          break;
          resultat = nb1 / nb2;
          message = "Le résultat de la division est : ";
          break;
      }

      document.querySelector("#resultat").innerHTML = message + resultat;
    }