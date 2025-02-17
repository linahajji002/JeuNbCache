document.addEventListener("DOMContentLoaded", function () {
    let playButton = document.querySelector("#playButton");
    playButton.addEventListener("click", startGame);
});
function startGame() {
    alert("Bienvenue dans le jeu du chiffre caché !");
    let difficulty;
    while (true) {
        difficulty = prompt("Choisissez la difficulté du jeu : facile, intermédiaire ou difficile").toLowerCase();
        if (difficulty === "facile" || difficulty === "intermédiaire" || difficulty === "difficile") {
            break
        } else {
            alert("Veuillez choisir entre 'Facile', 'Intermédiaire' ou 'Difficile'.");
        }
    }
    let maxAttempts, rangeMax;
    if (difficulty == "facile") {
        rangeMax = 10;
        maxAttempts = 5;
    } else if (difficulty == "intermédiaire") {
        rangeMax = 100;
        maxAttempts = 10;
    } else if (difficulty == "difficile") {
        rangeMax = 200;
        maxAttempts = 15;
    }
    let cachedNumber = Math.floor(Math.random() * rangeMax) + 1;
    let attemptsLeft = maxAttempts;
    while (attemptsLeft > 0) {
        let userattempt = prompt("le nombre caché de notre jeu est  entre 1 et " + rangeMax + " (Essais restants : " + attemptsLeft +")");
        if (userattempt === null) {
            alert("Jeu annulé. ");
            return;
        }
        userattempt = parseInt(userattempt);
        if (isNaN(userattempt) || userattempt < 1 || userattempt > rangeMax) {
            alert("Veuillez entrer un nombre valide entre 1 et " + rangeMax);
            continue;
        }
        attemptsLeft--;
        if (userattempt == cachedNumber) {
            let attemptsDone = maxAttempts - attemptsLeft;
            alert("Bravo ! Vous avez trouvé le nombre caché "+cachedNumber+" in "+attemptsDone+" essais.");
            break;
        } else if (userattempt < cachedNumber) {
            alert("le nombre caché est plus grand");
        } else {
            alert("le nombre caché est plus faible");
        }
    }
    if (attemptsLeft == 0) {
        alert("Vous avez perdu ! Le nombre caché  est " + cachedNumber);
    }
    if (confirm("Voulez-vous rejouer ?")) {
        startGame();
    }
}
