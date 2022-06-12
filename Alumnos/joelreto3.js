// autor:joel 
//reto3 crear auto

function crearAuto(auto){

      for(var i=1; i<=20; i++){
            console.log('auto'+i);
      }
}
crearAuto(20);
function crearAuto(modelo, marca, año){
    this.modelo = modelo;
    this.marca = marca;
    this.año = año;
 
}
// ejemplo
let toyota = new crearAuto('Toyota', 'yaris',2015);

console.log(toyota);
//

console.log();

console.log(toyota.modelo);
console.log(toyota.marca);
console.log(toyota.año);
