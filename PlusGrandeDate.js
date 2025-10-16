function plusRecente(date1, date2) {
    if (date1 > date2) {
        console.log("La date la plus récente est " + date1);
    } else if (date2 > date1) {
        console.log("La date la plus récente est " + date2);
    }
}

// Exemple d'appel de la fonction
plusRecente("2018-06-13", "2019-09-13");