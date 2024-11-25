// Variables de score
let scoreJoueur = 0;
let scoreOrdinateur = 0;

/**
 * Fonction qui gère le jeu pour un tour
 * @param {string} choixJoueur - Le choix du joueur ("rock", "paper", "scissor").
 */
function jouer(choixJoueur) {
    const choixOrdinateur = ["rock", "paper", "scissor"][Math.floor(Math.random() * 3)];

    // Afficher les résultats
    document.querySelector('.resultat').style.display = 'flex';
    document.querySelector('.result_joueur img').src = `img/${choixJoueur}.jpg`;
    document.querySelector('.result_joueur img').alt = choixJoueur;
    document.querySelector('.result_ordinateur img').src = `img/${choixOrdinateur}.jpg`;
    document.querySelector('.result_ordinateur img').alt = choixOrdinateur;

    // Déterminer le gagnant
    if (choixJoueur === choixOrdinateur) {
        alert("Égalité ! Rejouez.");
    } else if (
        (choixJoueur === "rock" && choixOrdinateur === "scissor") ||
        (choixJoueur === "paper" && choixOrdinateur === "rock") ||
        (choixJoueur === "scissor" && choixOrdinateur === "paper")
    ) {
        scoreJoueur++;
        document.getElementById('score-joueur').textContent = `Joueur: ${scoreJoueur}`;
    } else {
        scoreOrdinateur++;
        document.getElementById('score-ordinateur').textContent = `Ordinateur: ${scoreOrdinateur}`;
    }
}

/**
 * Fonction pour réinitialiser le jeu.
 */
function resetGame() {
    scoreJoueur = 0;
    scoreOrdinateur = 0;

    // Remettre à zéro le score
    document.getElementById('score-joueur').textContent = "Joueur: 0";
    document.getElementById('score-ordinateur').textContent = "Ordinateur: 0";

    // Masquer les résultats
    document.querySelector('.resultat').style.display = 'none';

    // Vider les images des résultats
    document.querySelector('.result_joueur img').src = "";
    document.querySelector('.result_ordinateur img').src = "";
}

// Attacher les événements "click" aux éléments
document.querySelector('.rock').addEventListener('click', () => jouer('rock'));
document.querySelector('.paper').addEventListener('click', () => jouer('paper'));
document.querySelector('.scissor').addEventListener('click', () => jouer('scissor'));

// Attacher l'événement "click" au bouton de reset
document.getElementById('resetBtn').addEventListener('click', resetGame);
