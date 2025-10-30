function validerFormulaire() {

  let nom = document.querySelector("#nom").value;
  let prenom = document.querySelector("#prenom").value;
  let dateNaissance = document.querySelector("#dateNaissance").value;

  console.log("Nom :", nom);
  console.log("Prénom :", prenom);
  console.log("Date de naissance :", dateNaissance);

  let message = document.querySelector("#message");

  if (nom === "" || prenom === "" || dateNaissance === "") {
    message.innerHTML = "Vous devez remplir tous les champs !";
    message.className = "erreur";
    return;
  }

  message.innerHTML = "Formulaire envoyé avec succès !";
  console.log("Formulaire validé !");
}
