function validar(usuario,maquina){
    if (usuario===maquina){
        console.log("Empate!!");
    }else if(usuario=="papel" && maquina=="piedra"){
        console.log("ganaste");
    }else if ( usuario == "piedra" && maquina=="tijera"){
        console.log("ganaste");
    }else if (usuario=="tijera" && maquina=="papel"){
        console.log("ganaste")
    }else {
        console.log("perdiste")
    }
}
validar("piedra","papel")