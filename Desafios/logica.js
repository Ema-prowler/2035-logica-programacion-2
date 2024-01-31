//Funcion de mensaje en pantalla
function mensajeEnPantalla() {
  console.log("Hola mundo");
}
mensajeEnPantalla();
//Funcion de mensaje + nombre en pantalla

function saludar(nombre) {
  console.log("¡Hola, " + nombre + "!");
}
saludar("juan");
//funcion con el numero a multiplicar * 2
function doble(numero) {
  return numero * 2;
}

let resultado = doble(2);
console.log(resultado);

//funcion que muestra el promedio de 3 numeros
function calculcarPromedio(n1, n2, n3) {
  return n1 + n2 + n3 / 3;
}
let Promedio = calculcarPromedio(15, 10, 20);
console.log("El promedio es: " + Promedio);

//Funcion que que devuelve el mayor de 2 numeros
//Mejorada por mi
function generarNumeroAleatorio() {
  return Math.floor(Math.random() * 100) + 1;
}

function mayorDeDosNumeros(
  n1 = generarNumeroAleatorio(),
  n2 = generarNumeroAleatorio()
) {
  if (n1 > n2) {
    return console.log("El numero mayor entre: " + n1, "y " + n2, "es: " + n1);
  } else {
    return console.log("El numero mayor entre: " + n2, "y " + n1, "es: " + n2);
  }
}
mayorDeDosNumeros();

//Funcion de un numero multiplicado por si mismo
function multiplicadoPorSiMismo(n1 = generarNumeroAleatorio()) {
  console.log(n1); //mapeo del numero para ver si es correcta la multiplicacion
  return console.log((n1 = n1 * n1));
}
multiplicadoPorSiMismo();
