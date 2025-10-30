function creerGestionnaire() {
  return {
    taches: [],
    
    ajouterTache: function(description) {
      this.taches.push({ description: description, terminee: false });
    },
    
    terminerTache: function(index) {
      if (this.taches[index]) {
        this.taches[index].terminee = true;
      }
    },
    
    afficherTaches: function() {
      this.taches.forEach(tache => {
        let etat = tache.terminee ? "Terminée" : "Non terminée";
        console.log(`${tache.description} - ${etat}`);
      });
    }
  };
}

let gestionnaire = creerGestionnaire();

gestionnaire.ajouterTache("Faire les courses");
gestionnaire.ajouterTache("Appeler le médecin");
gestionnaire.ajouterTache("Envoyer le rapport");

gestionnaire.terminerTache(1);

gestionnaire.afficherTaches();
