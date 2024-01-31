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

// Ejemplo de uso
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

// Ejemplo de uso
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

// Ejemplo de uso
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

// Ejemplo de uso
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

// Ejemplo de uso
var numeroTabla = 7;

mostrarTablaMultiplicar(numeroTabla);
