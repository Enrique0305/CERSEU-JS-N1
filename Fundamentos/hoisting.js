//Hoisting es cuando las declaraciones de variables y funciones se procesan antes de ejecutar cualquier codigo
//al momento de qque se genere el hoisting, las funciones se declaran primero, y despues las variables

//Qué resultado esperas que nos aparezaca si corremos este ejemplo;
//error o undefine

console.log(miNombre);
var miNombre="Enrique";

//Lo que sucede con el Hoisting

var miNombre = undefined;
console.log(miNombre + " soy hoisting");
miNombre="Enrique"

//===Hoisting con funciones===

hey();
function hey(){
    console.log('Hola '+ miNombre)
}
var miNombre='Enrique';

//lo que sucede con el Hoisting
function hey(){ //la funcion se declara hasta arriba, y despues se declaran las variables
    console.log('Hola '+miNombre);
}
var miNombre;
hey();
miNombre = 'Enrique';
