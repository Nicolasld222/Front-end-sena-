"use strict";
//Ejemplo 1
/*
async function cuadrado(numero: number): Promise<number> {
    return numero * numero;
}

const resultado = cuadrado(5);

console.log(resultado);
*/
Object.defineProperty(exports, "__esModule", { value: true });
//Ejemplo 2
/*
function resultado(): Promise<number> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(8);
        }, 6000);
    });
}

const valor = resultado();
console.log(valor);
*/
//Ejemplo 3
/*
async function cuadradoAsincrono() {
    const numero = await resultado(); // espera el valor de la promesa
    const cuadrado = numero * numero;
    console.log(cuadrado);
}

cuadradoAsincrono();
*/
//Ejemplo 4
//1. Usamos la cláusula async, ya que cualquier función marcada como async devuelve implícitamente una Promesa.
//2. Usamos await (dentro de una función async) o el método .then().
//3. Solo se puede usar await dentro de una función declarada con async.
//# sourceMappingURL=index.js.map