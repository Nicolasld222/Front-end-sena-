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
/*
let estracto = 4

let promesa3 = new Promise((resolve, reject)=>{
    
    if(1 >= estracto && estracto <= 6){
    }else{
        reject (new Error (`Estracto no valido`))
    }

    if(estracto <= 2){
        resolve(`Si tiene Derecho a un subsidio`)
    }else{
        reject(`No tiene Derecho a un subsidioo`)
    }
    
    
    
})

promesa3.then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})
*/
//Ejemplo 4
/*
let promesa1 = new Promise ((resolve, reject )=>{
    resolve('“Somos ADSI”')
})
promesa1.then((res)=>{
    console.log(res)
})



let bandera: boolean = false 

let promesa2 = new Promise((resolve, reject)=>{

    if(bandera == true){
        resolve('Somos programadores')
    }else{
        reject('Promesa 2 no cumplida')
    }
})
promesa2.then((res)=>{
    console.log(res);
    
}).catch((err)=>{
    console.log(err);
    
})
*/


//Ejemplo 5
/*
let Promesa5 = new Promise((resolve, reject)=>{
    function banderaAct(){
        resolve('Promesa resuelta')
    }
    setTimeout(banderaAct, 4000);
    function banderaDesc(){
        reject(new Error ('info error'))
    }
    setTimeout(banderaDesc,4000)
})



Promesa5
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.error(err.stack);
    });
*/

//Ejemplo 6


let promesa1 = new Promise((resolve, reject) => {
    function resolver() {
        resolve("soy la promesa 1");
    }
    setTimeout(resolver, 5000);
})

let promesa2 = new Promise((resolve, reject) => {
    function resolver() {
        resolve("soy la promesa 2");
    }
    setTimeout(resolver, 3000);
})

let promesa3 = new Promise((resolve, reject) => {
    function resolver() {
        resolve("soy la promesa 3");
    }
    setTimeout(resolver, 4000);

    
})

let promesa4 = new Promise((resolve, reject) => {
    function resolver() {
        resolve("soy la promesa 4");
    }
    setTimeout(resolver, 5000);

    
})


Promise.race([promesa1, promesa2, promesa3, promesa4])
.then((resultado) => {
    console.log(resultado);
}).catch((Error)=>{
    console.log(Error);
    
})
