//las Funciones son procedimientos, un conjunto de sentencia o de pasos
// que realizaran una tarea o un calculo con ciertos valores

//tenemos dos tipos de funciones en js, function declarativa y la expresion de funcion
//el nombre reservado de funciton y parametros re qu recibiran la funcion

function miFuncion(){
    return 3
}

miFuncion(); //Llamar la funcion

var miFuncion2 = function(a,b){
    return a+b;
}
miFuncion2(2,4);

/**======================================= */

function saludarEstudiante(estudiante){
    console.log(`Hola ${estudiante}`); //template strings (plantillas de cadena de texto)
}

saludarEstudiante('Ivan');

