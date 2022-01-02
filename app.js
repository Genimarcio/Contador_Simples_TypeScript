"use strict";
let numero = 0;
let numeroAtualizado = document.getElementById('numero');
//Incrementar e decrementar o número
function incrementar() {
    numero += 1;
    numeroAtualizado.innerText = numero;
}
function decrementar() {
    numero -= 1;
    numeroAtualizado.innerText = numero;
}
