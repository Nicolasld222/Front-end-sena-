//Ejercicio 1

function ejemplo(numero: number, texto: string = "Palabra X", bandera?: boolean) {
    console.log("Número:", numero);
    console.log("Texto:", texto);
    console.log("Bandera:", bandera);
}

ejemplo(10);

//Ejercicio 2

function ejemplo2(numero1: number, number2: number){
    let resultado: number = numero1 + number2;
    console.log("Resultado:", resultado);
    return resultado;
}
ejemplo2(5, 10);

//Ejercicio 3
setTimeout(() => {
    console.log("HOLA ADSI");
}, 5000);

//Ejercicio 4
function ejemplo4(){
    console.log("Hola ADSI");
}

//Ejercicio 5
const mostrarEdad = (edad: number) => `La edad ingresada es: ${edad}`;

console.log(mostrarEdad(25));