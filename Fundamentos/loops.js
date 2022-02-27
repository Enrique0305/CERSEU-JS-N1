//Los loops (bucles), son una manera rapida y sencilla de hacer algo ( tarea) repetidamente

var estudiantes = ['Maria','Sergio','Rosa','Daniel']
function saludarEstudiante(estudiante){
    console.log(`Hola ${estudiante}`);
}
for(var i=0; i<estudiantes.length; i++){
    saludarEstudiante(estudiantes[i]);
}

for( var estudiante of estudiantes){
    saludarEstudiante(estudiante);
}