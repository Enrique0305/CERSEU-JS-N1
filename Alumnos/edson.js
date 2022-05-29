// Autor: Edson prudencio
// reto 1 y 2

function juego(pc,usu){
if (pc === usu) {
      console.log("es un empate");
    }
else if((pc === "piedra" && usu === "tijera") ||
        (pc === "papel" && usu === "piedra") ||
        (pc === "tijera" && usu === "papel")){
      
        
      
        console.log("pc gana");
      }
     else{ console.log("usuario gana");
         }
    }
juego("piedra","papel")




function juegos2(PC,USU){
  if (PC === USU) return "Empate";

  switch (PC) {
    case "PIEDRA":
      switch (USU) {
        case "PAPEL":
          return "Ganaste";
        default:
          return "PC gana";
      }
    case "PAPEL":
      switch (USU) {
        case "TIJERA":
          return "Ganaste";
        default:
          return "PC gana";
      }
    case "TIJERA":
      switch (USU) {
        case "PIEDRA":
          return "Ganaste";
        default:
          return "PC gana";
      }
  }
}
// reto 3 

function crearAuto(auto){
   
      for(var i=1; i<=20; i++){
            console.log('auto'+i);
      }
}
crearAuto(20);
