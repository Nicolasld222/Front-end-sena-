/* Variables Logicas */
var activo = true;
var finalizacion = false;
/*Variables numericas*/
var edad = 10;
var cedula = 1090288821;
/*Variables any*/
var mesaje = "Hola user";
var mes = "Septiembre";
/*Variables String*/
var msjBienvenida = "Hola bienvenido a la pagina";
var saludo = "Hola como estas?";
/* Saludo */
var nombreUser = "Jose";
var ApellidoUser = "Perez";
var MsjCompleto = "Hola. Bienvenido nombre ".concat(nombreUser, ", Apellido ").concat(ApellidoUser);
console.log(MsjCompleto);
/* Arreglos */
var ArregloNum = [1, 2, 3, 4, 5];
ArregloNum.forEach(function (numeros) {
    console.log(numeros);
});
var semana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
semana.forEach(function (Dias) {
    console.log(Dias);
});
/* Objects */
var objectone = function (diauno, diados, diatres) {
    var diaone = diauno;
    var diatwo = diados;
    var diathree = diatres;
    var msjSemana = "Los dias de la semana son: ".concat(diaone, ", ").concat(diatwo, ", ").concat(diathree);
    return msjSemana;
};
console.log(objectone("Lunes", "Martes", "Miercoles"));
