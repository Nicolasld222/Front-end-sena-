//Ejercicio 1
function ejemplo(numero, texto, bandera) {
    if (texto === void 0) { texto = "Palabra X"; }
    console.log("Número:", numero);
    console.log("Texto:", texto);
    console.log("Bandera:", bandera);
}
ejemplo(10);
//Ejercicio 2
function ejemplo2(numero1, number2) {
    var resultado = numero1 + number2;
    console.log("Resultado:", resultado);
    return resultado;
}
ejemplo2(5, 10);
//Ejercicio 3
setTimeout(function () {
    console.log("HOLA ADSI");
}, 5000);
//Ejercicio 4
function ejemplo4() {
    console.log("Hola ADSI");
}
//Ejercicio 5
var mostrarEdad = function (edad) { return "La edad ingresada es: ".concat(edad); };
console.log(mostrarEdad(25));
