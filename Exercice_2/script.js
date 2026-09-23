let noAffichage = document.getElementById('Masquer');
let Affichage = document.getElementById('Afficher');
let bla = document.getElementById('text');

noAffichage.addEventListener('click' , disparait)

function disparait() {
    bla.style.visibility="hidden"
}

Affichage.addEventListener('click', apparait)

function apparait() {
    bla.style.visibility="visible"
}
