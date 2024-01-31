let numeroSecreto = generarNumeroSecreto();
let intentos = 1;

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento(
      "p",
      `Acertaste el numero en ${intentos} ${intentos === 1 ? "vez" : "veces"}`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    //El usuario no acerto.
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento("p", "El numero secreto es menor");
    } else {
      asignarTextoElemento("p", "El numero secreto es mayor");
    }
    intentos++;
    limpiarCaja();
  }
  return;
}
//funcion para limpiar la caja de texto

function limpiarCaja() {
  document.querySelector("#valorUsuario").value = "";
}

//------------
function generarNumeroSecreto() {
  return Math.floor(Math.random() * 10) + 1;
}

asignarTextoElemento("h1", "Juego del número secreto!");
asignarTextoElemento("p", "Indica un numero del 1 al 10");
//termino HOISTING
//Alcance o ambito de la variable
/*tripe igual "===" compara los valores y tambien compara 
los tipos de datos, (string,number) */
/*Funcion rara xD
function verificarAprobacion(promedio){
  return promedio >= 5 ? “Aprobado” : “Reprobado”;
}
*/
