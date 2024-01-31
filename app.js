let numeroSecreto = generarNumeroSecreto();

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
  console.log(numeroSecreto);
  console.log(numeroDeUsuario);
  console.log(numeroDeUsuario === numeroSecreto);
  return;
}

function generarNumeroSecreto() {
  return Math.floor(Math.random() * 10) + 1;
}

asignarTextoElemento("h1", "Juego del número secreto!");
asignarTextoElemento("p", "Indica un numero del 1 al 100");
//termino HOISTING
//Alcance o ambito de la variable
//tripe igual (===) compara los valores y tambien compara los tipos de datos,(string,number)
