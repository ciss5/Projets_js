// Variables de score
let scoreJoueur = 0;
let scoreOrdinateur = 0;

/******* Fonction qui gère le jeu pour un tour choixJoueur - Le choix du joueur ("rock", "paper", "scissor").******/
function jouer(choixJoueur) {
    const choixOrdinateur = ["rock", "paper", "scissor"][Math.floor(Math.random() * 3)];

    // Afficher les résultats
    document.querySelector('.resultat').style.display = 'flex';
    document.querySelector('.result_joueur img').src = `img/${choixJoueur}.jpg`;
    document.querySelector('.result_joueur img').alt = choixJoueur;
    document.querySelector('.result_ordinateur img').src = `img/${choixOrdinateur}.jpg`;
    document.querySelector('.result_ordinateur img').alt = choixOrdinateur;

    // Calculer les scores
    if (choixJoueur === choixOrdinateur) {
        alert("Égalité ! Rejouez.");
    } else if (
        (choixJoueur === "rock" && choixOrdinateur === "scissor") ||
        (choixJoueur === "paper" && choixOrdinateur === "rock") ||
        (choixJoueur === "scissor" && choixOrdinateur === "paper")
    ) {
        scoreJoueur++;
    } else {
        scoreOrdinateur++;
    }

    // Mettre à jour les scores
    document.getElementById('score-joueur').textContent = `Joueur: ${scoreJoueur}`;
    document.getElementById('score-ordinateur').textContent = `Ordinateur: ${scoreOrdinateur}`;

    // Mettre à jour les couleurs des scores
    updateScoreColors();
}

/*******Met à jour les couleurs des scores en fonction des valeurs*****/
function updateScoreColors() {
    const scoreJoueurElement = document.getElementById('score-joueur');
    const scoreOrdinateurElement = document.getElementById('score-ordinateur');

    if (scoreJoueur > scoreOrdinateur) {
        scoreJoueurElement.classList.add('gagne');
        scoreJoueurElement.classList.remove('perd');
        scoreOrdinateurElement.classList.add('perd');
        scoreOrdinateurElement.classList.remove('gagne');
    } else if (scoreOrdinateur > scoreJoueur) {
        scoreOrdinateurElement.classList.add('gagne');
        scoreOrdinateurElement.classList.remove('perd');
        scoreJoueurElement.classList.add('perd');
        scoreJoueurElement.classList.remove('gagne');
    } else {
        // Égalité - enlever les couleurs
        scoreJoueurElement.classList.remove('gagne', 'perd');
        scoreOrdinateurElement.classList.remove('gagne', 'perd');
    }
}

/******Fonction pour réinitialiser le jeu.******/
function resetGame() {
    scoreJoueur = 0;
    scoreOrdinateur = 0;

    // Remettre à zéro le score
    document.getElementById('score-joueur').textContent = "Joueur: 0";
    document.getElementById('score-ordinateur').textContent = "Ordinateur: 0";

    // Masquer les résultats
    document.querySelector('.resultat').style.display = 'none';

    // Supprimer les classes de style
    document.getElementById('score-joueur').classList.remove('gagne', 'perd');
    document.getElementById('score-ordinateur').classList.remove('gagne', 'perd');

    // Vider les images des résultats
    document.querySelector('.result_joueur img').src = "";
    document.querySelector('.result_ordinateur img').src = "";
}

//  les événements "click"
document.querySelector('.rock').addEventListener('click', () => jouer('rock'));
document.querySelector('.paper').addEventListener('click', () => jouer('paper'));
document.querySelector('.scissor').addEventListener('click', () => jouer('scissor'));
document.getElementById('resetBtn').addEventListener('click', resetGame);
