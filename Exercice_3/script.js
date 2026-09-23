let bla = document.getElementById('text')
let vert = document.getElementById('green')
let bleu = document.getElementById('blue')
let rouge = document.getElementById('red')

vert.addEventListener('click', textVert)
function textVert(){
    bla.style.color = "green"
}
bleu.addEventListener('click' , textBleu)
function textBleu(){
    bla.style.color = "blue"
}
rouge.addEventListener('click' , textRouge)
function textRouge(){
    bla.style.color = "red"
}