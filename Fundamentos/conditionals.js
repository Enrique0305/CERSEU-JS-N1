//Esto nos ayudara para poder hacer decisiones
//con el if  validamos que la condicion sea true
var esUsuario = true;
if(esUsuario){
    console.log('Tienes acceso al contenido');
}

//Presentamos al else

var esUsuario = false;
if(esUsuario){
    console.log('Tienes acceso al contenido');
} else {
    console.log('Tienes que solicitar acceso')
}

//Ejemplo de como hariamos una validacion

var edad= 15;
var accion;

if(edad>=18){
    accion='Puedes votar'
} else {
    accion = 'No puedes votar'
}

console.log(accion);

//Ejemplo de como validariamos el else if
var edad= 18;
var accion;

if(edad===18){
    accion= 'Puedes votar, será tu primera votación'
} else if(edad>18){
    accion = 'Puedes votar'
} else{
    accion = 'Aun no puedes votar'
}

console.log(accion);

/**============================================= */
//operador ternario

var numero = 1;
var resultado;

if(numero===1){
    resultado='Si soy un uno'
} else {
    resultado = 'No soy un uno'
}

// condicion ? true : false
var numero = 1;

var resultado = numero === 2 ? 'Si soy un uno' : 'No soy un uno';

console.log(resultado);

/***************  RETO 1*****************/
// var papel = 'papel'
// var tijera = 'tijera'
// var piedra = 'piedra'
// function jugar(){
//     if(){

//     }else if(){

//     } else {

//     }
// }

