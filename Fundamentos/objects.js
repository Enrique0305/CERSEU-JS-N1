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