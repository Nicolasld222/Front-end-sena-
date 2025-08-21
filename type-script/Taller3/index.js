//Ejercicio 1
/*
let promesa1 = new Promise((resolve, reject)=> {
    resolve (`Somos programadores, hacemos mover el mundo`)
})

promesa1.then((res)=>{
    console.log(res);
    return promesa1;
}).catch((err) => {
    console.log(err);
})

*/
//Ejemplo 2
/*
let promesa2 = new Promise((resolve, reject)=>{
    reject(`Error`)
})
promesa2.then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(`Ha ocurrido un error desconocido`)
})
*/
//Ejemplo 3
var estracto = 4;
var promesa3 = new Promise(function (resolve, reject) {
    if (1 >= estracto && estracto <= 6) {
    }
    else {
        reject(new Error("Estracto no valido"));
    }
    if (estracto <= 2) {
        resolve("Si tiene Derecho a un subsidio");
    }
    else {
        reject("No tiene Derecho a un subsidioo");
    }
});
promesa3.then(function (res) {
    console.log(res);
}).catch(function (err) {
    console.log(err);
});
