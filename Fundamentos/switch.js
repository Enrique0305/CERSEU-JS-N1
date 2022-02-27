//Switch es una forma diferente de validar, esta depende del caso que sea verdad

var numero = 20;
var resultado;

/**Switch compara con un === por esa razon los elementos  tiene que ser identicos */

switch(numero){
    case 1:
        resultado='Si es uno';
        break;
    case 10:
        resultado='Si es un diez'
        break;
    case 100:
        resultado='si es un cien'
        break;
    default:
        resultado='No match';
}

console.log(resultado);