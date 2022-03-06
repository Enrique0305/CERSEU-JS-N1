//Un array es una estructura de datos, es un objeto tipo lista de alto nivel.
//Los arrays son objetos de tipo lista cuyo prototipo tiene metodos para realizar
// operaciones de recorrido y mutacion.

var frutas = []; //Array literal Sintax

var frutas=['Manzana','Mandarina','Uva','Pera'];
console.log(frutas);
console.log(frutas.length) // length es una propiedad de los arreglos

//Acceder (por indice) a un elemento del Array
console.log(frutas[3]); // Los arreglos inician en 0

//======== Metodos para mutar arrays =========

//.push();
var frutas=['Manzana','Mandarina','Uva','Pera'];
var masFrutas = frutas.push('Platano'); //Este metodo añadira 'Platano' al final del arreglo
console.log(frutas);
console.log(masFrutas);
//.pop();
var ultimo = frutas.pop('Platano'); //Eliminara 'platano' del final
console.log(frutas);
// unshift()

var nuevaLongitud = frutas.unshift('Platano'); //Añadir al inicio
console.log(frutas);

//shift()
var borrarFruta=frutas.shift('Manzana'); // eliminar del inicio manazana
console.log(frutas);