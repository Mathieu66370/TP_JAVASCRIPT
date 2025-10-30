function calculerMoyenne(tab) {

  if (!Array.isArray(tab)) {
    throw new Error("Le paramètre n'est pas un tableau.");
  }

  if (!tab.every(element => typeof element === "number")) {
    throw new Error("Le tableau contient un élément non numérique.");
  }

  if (tab.length === 0) {
    return 0;
  }

  let somme = tab.reduce((a, b) => a + b, 0);
  return somme / tab.length;
}
// 1️⃣ Cas avec un tableau de nombres
try {
  let tab1 = [10, 20, 30, 40];
  console.log("Moyenne tab1 :", calculerMoyenne(tab1)); // 25
} catch (error) {
  console.log(error.message);
}

try {
  let tab2 = [10, "bonjour", 30];
  console.log("Moyenne tab2 :", calculerMoyenne(tab2));
} catch (error) {
  console.log(error.message); 
}

try {
  let tab3 = "ceci n'est pas un tableau";
  console.log("Moyenne tab3 :", calculerMoyenne(tab3));
} catch (error) {
  console.log(error.message); // "Le paramètre n'est pas un tableau."
}

try {
  let tab4 = [];
  console.log("Moyenne tab4 :", calculerMoyenne(tab4)); // 0
} catch (error) {
  console.log(error.message);
}


