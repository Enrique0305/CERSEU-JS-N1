//Un objecto es una coleccion de propiedades y una porpiedad es una asociacion de key y valores

var object = {}

var miAuto = {
    marca:'Toyota',
    modelo:'Corolla',
    annio:2021,
    detallesDelAuto: function(){
        return `Auto ${this.modelo} ${this.annio}`
    }
};

miAuto.annio
miAuto.modelo
miAuto.detallesDelAuto();

//Funcion constructora
function auto(marca, modelo, annio){
    this.marca=marca; //Utilizamos el this para asignar valores a las propiedades del objeto
    this.modelo=modelo;
    this.annio= annio;
}
var newAuto = new auto('Tesla','Model 2',2022);