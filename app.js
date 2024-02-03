let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];

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
  let numeroGenerado = Math.floor(Math.random() * 10) + 1;
  //si el numero generado esta incluido en la lista
  if (listaNumeroSorteados.includes(numeroGenerado)) {
    return generarNumeroSecreto();
  } else {
    listaNumeroSorteados.push(numeroGenerado);
    return numeroGenerado;
  }
}

asignarTextoElemento("h1", "Juego del número secreto!");
asignarTextoElemento("p", "Indica un numero del 1 al 10");
//Funcion mensajes iniciales
function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego del número secreto!");
  asignarTextoElemento("p", "Indica un numero del 1 al 10");
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

//funcion reiniciar juego para reiniciar el juego ja.
function reiniciarJuego(params) {
  //Limpiar caja
  limpiarCaja();
  //Indicar mensaje de intervalo de numeros
  //Generar el numero aleatorio
  //Inicialiazar el numero de intentos.
  condicionesIniciales();
  //Deshabilitar el boton de nuevo juego
  document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();
//termino HOISTING
//Alcance o ambito de la variable
/*tripe igual "===" compara los valores y tambien compara 
los tipos de datos, (string,number) */
/*Funcion rara xD
function verificarAprobacion(promedio){
  return promedio >= 5 ? “Aprobado” : “Reprobado”;
}
*/
