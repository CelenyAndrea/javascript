// Código del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}

console.groupEnd();

// Código del triángulo
console.group("Triángulos");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

function areaTrianguloIsosceles(a, b, c) {
  if (a === b && a != c) {
    let d = c / 2;
    let altura = Math.sqrt((a)**2 - (d)**2);
    return altura
  }
}
console.log(areaTrianguloIsosceles(15, 15, 9))

console.groupEnd();

// Código del círculo
console.group("Círculos");

// Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Área
function areaCirculo(radio) {
  return (radio * radio) * PI;
}

console.groupEnd();


// Aquí interactuamos con el HTML cuadrado
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

// Aquí interactuamos con el HTML triangulo
function calcularPerimetroTriangulo() {
  const ladoA = parseInt(document.getElementById("InputTrianguloA").value);
  const ladoB = parseInt(document.getElementById("InputTrianguloB").value);
  const base = parseInt(document.getElementById("InputTrianguloC").value);

  const perimetro = perimetroTriangulo(ladoA,ladoB,base);
  alert(perimetro);
}

function calcularAreaTriangulo() {
  const base = parseInt(document.getElementById("InputTrianguloC").value);
  const altura = parseInt(document.getElementById("InputTrianguloD").value);

  const area = areaTriangulo(base,altura);
  alert(area);
}

//Calculando valores del Circulo
function calcularDiametro() {
  const input = document.getElementById("InputCirculo");
  const value = input.value;

  const diametro = diametroCirculo(value);
  alert(diametro);
}

function calcularCircunferencia() {
  const input = document.getElementById("InputCirculo");
  const value = input.value;

  const perimetro = perimetroCirculo(value);
  alert(perimetro);
}

function calcularAreaCirculo() {
  const input = document.getElementById("InputCirculo");
  const value = input.value;
  const area = areaCirculo(value);
  alert(area);
}
