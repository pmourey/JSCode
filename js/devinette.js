/*
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

var nombreEssais = 6;
var numEssai = 0;
var trouve = false;
var nombreSaisi;
var saisieValide = false;

while (numEssai <= nombreEssais && !trouve) {
    while ( !saisieValide ) {
        nombreSaisi = Number(prompt("Nombre à deviner (entre 1 et 100): "),"");
        // Contrôle de la saisie
        var saisieValide = ( !isNaN(nombreSaisi) && nombreSaisi >= 1 && nombreSaisi <= 100 );
        if (!saisieValide)
            console.log("Saisie incorrecte!");
    }
    numEssai += 1;
    saisieValide = false;
    if (nombreSaisi < solution)
        console.log(nombreSaisi + " trop petit");
    else if (nombreSaisi > solution)
        console.log(nombreSaisi + " trop grand");
    else
        trouve = true;
}


if (numEssai < nombreEssais && trouve ) {
    console.log("Bravo ! La solution était " + solution);
    console.log("Vous avez trouvé en " + numEssai + " essai(s)");
}
else
    console.log("Perdu... La solution était " + solution);
