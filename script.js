function claimClassroom() {
    let duree = document.getElementById("duree").value;
    let salle = document.getElementById("salle").textContent;
    if (duree < 1 ||  duree === undefined) {
        alert("Vous devez rentrer une durée correcte");
    } else {
        alert("Vous avez bien réservé la "+ salle +" pour une durée de "+ duree + " minutes");
    }
}