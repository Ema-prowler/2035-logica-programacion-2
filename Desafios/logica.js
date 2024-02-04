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
//Funcion calculadora de imc
function calculadoraImc(peso, altura) {
  let imc = peso / (altura * altura);
  return imc.toFixed(2);
}
let peso = 70;
let altura = 1.75;
var resultadoIMC = calculadoraImc(peso, altura);
console.log("El IMC es: " + resultadoIMC);
//funcion que calcula el valor factorial de un numero pasado como parametro
function calcularFactorial(numero) {
  // Verifica si el número es no negativo
  if (numero < 0) {
    return "El factorial no está definido para números negativos.";
  }

  // Caso base: factorial de 0 es 1
  if (numero === 0) {
    return 1;
  }

  // Caso recursivo: n! = n * (n-1)!
  return numero * calcularFactorial(numero - 1);
}

var numero = 5;
var resultadoFactorial = calcularFactorial(numero);

console.log("El factorial de " + numero + " es: " + resultadoFactorial);
//funcion convertir dolares a reales
function convertirDolaresAReales(valorDolares) {
  // Cotización del dólar a reales
  const cotizacionDolar = 4.8;

  // Verifica si el valor ingresado es un número válido
  if (isNaN(valorDolares)) {
    return "Por favor, ingrese un valor numérico válido en dólares.";
  }

  // Calcula el valor equivalente en reales
  const valorReales = valorDolares * cotizacionDolar;

  return valorReales.toFixed(2);
}

var valorDolares = 100;
var resultadoConversion = convertirDolaresAReales(valorDolares);

console.log("$" + valorDolares + " en reales es: R$" + resultadoConversion);
//funcion calcular el area y el perimetro
function calcularAreaYPerimetro(anchura, altura) {
  // Verifica si los parámetros son números válidos
  if (isNaN(anchura) || isNaN(altura)) {
    return "Por favor, ingrese valores numéricos válidos para la anchura y la altura.";
  }

  // Calcula el área y el perímetro
  const area = anchura * altura;
  const perimetro = 2 * (anchura + altura);

  // Muestra los resultados en la consola
  console.log("Área de la sala: " + area.toFixed(2) + " metros cuadrados");
  console.log("Perímetro de la sala: " + perimetro.toFixed(2) + " metros");
}

var anchuraSala = 5; // en metros
var alturaSala = 10; // en metros

calcularAreaYPerimetro(anchuraSala, alturaSala);

//Funcion calcular el area y el perimetro de un circulo
function calcularAreaYPerimetroCirculo(radio) {
  // Verifica si el parámetro es un número válido
  if (isNaN(radio)) {
    return "Por favor, ingrese un valor numérico válido para el radio.";
  }

  // Definición de pi
  const pi = 3.14;

  // Calcula el área y el perímetro
  const area = pi * radio * radio;
  const perimetro = 2 * pi * radio;

  // Muestra los resultados en la consola
  console.log(
    "Área de la sala circular: " + area.toFixed(2) + " metros cuadrados"
  );
  console.log(
    "Perímetro de la sala circular: " + perimetro.toFixed(2) + " metros"
  );
}

var radioSalaCircular = 3; // en metros

calcularAreaYPerimetroCirculo(radioSalaCircular);

//funcion mostrar la tabla de multiplicar de un numero

function mostrarTablaMultiplicar(numero) {
  // Verifica si el parámetro es un número válido
  if (isNaN(numero)) {
    console.log("Por favor, ingrese un valor numérico válido.");
    return;
  }

  // Muestra la tabla de multiplicar del número dado
  console.log("Tabla de multiplicar del " + numero + ":");

  for (let i = 1; i <= 10; i++) {
    const resultado = numero * i;
    console.log(numero + " x " + i + " = " + resultado);
  }
}

var numeroTabla = 7;

mostrarTablaMultiplicar(numeroTabla);
//Desafios Arrays
//array vacio
let listaGenerica = [];
//lista de lenguajes de programacions
let lenguajesDeProgramacion = ["JavaScript", "C", "C++", "Kotlin", "Python"];
//agregando a la lista otros lenguajes de programcion
lenguajesDeProgramacion.push("java", "ruby", "GoLang");
console.log(lenguajesDeProgramacion);
//Funcion que muestra en coonsola todos los elementos de la lista lenguajesDeProgramacion
function mostrarLaLista() {
  console.log(lenguajesDeProgramacion);
}
mostrarLaLista();
//funcion para mostrar lista de manera invertida
function mostrarListaInvertida() {
  console.log(lenguajesDeProgramacion.reverse());
}
mostrarListaInvertida();
//funcion que calcula el promedio de los elementos de una lista de numeros
let listaDeNumeros = [1, 2, 3];
function promedioDeUnaLista(listaDeNumeros) {
  let suma = listaDeNumeros.reduce(
    (acumulador, elemento) => acumulador + elemento,
    0
  );
  return (suma = suma / 3);
}
let resultado2 = promedioDeUnaLista(listaDeNumeros);
console.log("la suma de los elementos es: " + resultado2);
//funcion que muestre en la consola el numero mas grande y el mas pequeño de una lista
//reutilizando el array anterior
function encontrarExtremos(listaDeNumeros) {
  let numeroMasPequeno = listaDeNumeros[0];
  let numeroMasGrande = listaDeNumeros[0];

  console.log(
    "Inicialización: numeroMasPequeno =",
    numeroMasPequeno,
    ", numeroMasGrande =",
    numeroMasGrande
  );

  for (let i = 1; i < listaDeNumeros.length; i++) {
    console.log("Inicio de la iteración", i);
    console.log("Comparando con numeroMasPequeno =", numeroMasPequeno);
    console.log("Comparando con numeroMasGrande =", numeroMasGrande);

    if (listaDeNumeros[i] < numeroMasPequeno) {
      numeroMasPequeno = listaDeNumeros[i];
      console.log("Nuevo numeroMasPequeno:", numeroMasPequeno);
    }

    if (listaDeNumeros[i] > numeroMasGrande) {
      numeroMasGrande = listaDeNumeros[i];
      console.log("Nuevo numeroMasGrande:", numeroMasGrande);
    }

    console.log("Fin de la iteración", i);
  }

  console.log("Resultado final:");
  console.log("El número más pequeño es:", numeroMasPequeno);
  console.log("El número más grande es:", numeroMasGrande);
}

encontrarExtremos(listaDeNumeros);
//funcion suma elementos de una lista
function promedioDeUnaLista(listaDeNumeros) {
  let suma = listaDeNumeros.reduce(
    (acumulador, elemento) => acumulador + elemento,
    0
  );
  return suma;
}
let resultado3 = promedioDeUnaLista(listaDeNumeros);
console.log(resultado3);
//funcion encontrar posicion
function encontrarPosicion(elemento, lista) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === elemento) {
      return i; // Devuelve la posición si encuentra el elemento
    }
  }

  return -1; // Devuelve -1 si no encuentra el elemento
}

let miLista = [1, 2, 3, 4, 5];
let elementoBuscado = 3;
let posicion = encontrarPosicion(elementoBuscado, miLista);

if (posicion !== -1) {
  console.log(
    `El elemento ${elementoBuscado} se encuentra en la posición ${posicion} de la lista.`
  );
} else {
  console.log(`El elemento ${elementoBuscado} no se encuentra en la lista.`);
}
//funcion sumar listas
function sumarListas(lista1, lista2) {
  if (lista1.length !== lista2.length) {
    console.log("Las listas no tienen el mismo tamaño.");
    return null; // Devuelve null si las listas no tienen el mismo tamaño
  }

  let resultado = [];

  for (let i = 0; i < lista1.length; i++) {
    resultado.push(lista1[i] + lista2[i]);
  }

  return resultado;
}

let listaA = [1, 2, 3];
let listaB = [4, 5, 6];
let resultadoSuma = sumarListas(listaA, listaB);

if (resultadoSuma !== null) {
  console.log("La lista resultante de la suma es:", resultadoSuma);
}
//funcion calcular cuadrados
function calcularCuadrados(listaDeNumeros) {
  let listaDeCuadrados = [];

  for (let i = 0; i < listaDeNumeros.length; i++) {
    listaDeCuadrados.push(listaDeNumeros[i] ** 2);
  }

  return listaDeCuadrados;
}

let listaOriginal = [1, 2, 3, 4, 5];
let listaDeCuadrados = calcularCuadrados(listaOriginal);

console.log("La lista de cuadrados es:", listaDeCuadrados);
