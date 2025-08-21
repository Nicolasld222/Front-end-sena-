/* Variables Logicas */
let activo:boolean = true
let finalizacion:boolean = false

/*Variables numericas*/
let edad:number = 10
let cedula:number = 1090288821

/*Variables any*/
let mesaje: any = "Hola user"
let mes: any = "Septiembre"

/*Variables String*/

let msjBienvenida:string = "Hola bienvenido a la pagina"
let saludo:string = "Hola como estas?"

/* Saludo */

let nombreUser:string = "Jose"
let ApellidoUser:string = "Perez"
let MsjCompleto:string = `Hola. Bienvenido nombre ${nombreUser}, Apellido ${ApellidoUser}`

console.log(MsjCompleto);


/* Arreglos */

let ArregloNum = [1, 2, 3, 4, 5]
ArregloNum.forEach( numeros => {
    console.log(numeros);
    
});

let semana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"]

semana.forEach(Dias => {
    console.log(Dias)
})

/* Objects */

let objectone =( diauno:string, diados:string, diatres:string)=>{
    let diaone = diauno
    let diatwo = diados
    let diathree = diatres
    let msjSemana = `Los dias de la semana son: ${diaone}, ${diatwo}, ${diathree}`
    return msjSemana; 
}
console.log(objectone("Lunes", "Martes", "Miercoles"));