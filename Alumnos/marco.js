//AUTOR: MARCO ANTONIO CHILE ANDRADE
//RETOS 1 Y 2
//USANDO IF ELSE

function juego(computer, user) {
    if (computer == user) {
      return console.log("empate");
    } else if (computer == "piedra") {
      if (user == "papel") {
        return console.log("win user, papel gana a piedra");
      } else if (user == "tijera") {
        return console.log("win computer, piedra gana a tijera");
      }
    } else if (computer == "papel") {
      if (user == "tijera") {
        return console.log("win user, tijera gana a papel");
      } else if (user == "piedra") {
        return console.log("win computer, papel gana a piedra");
      }
    } else if (computer == "tijera") {
      if (user == "piedra") {
        return console.log("win user, piedra gana a tijera");
      } else if (user == "papel") {
        return console.log("win computer, tijera gana a papel");
      }
    }
  }
  juego("tijera", "piedra");


// USANDO switch
  function game(computerOption, playerOption) {
    let computer = computerOption;
    let player = playerOption;
    let result = "";
    switch (computer) {
      case "piedra":
        if (player == "papel") {
          result = "player win";
        } else if (player == "tijera") {
          result = "Computer win";
        } else {
          result = "empate";
        }
        break;
      case "papel":
        if (player == "tijera") {
          result = "player win";
        } else if (player == "piedra") {
          result = "Computer win";
        } else {
          result = "empate";
        }
        break;
      case "tijera":
        if (player == "piedra") {
          result = "player win";
        } else if (player == "papel") {
          result = "Computer win";
        } else {
          result = "empate";
        }
        break;
      default:
        result = "datos incorrectos";
        break;
    }
    console.log(result);
  }
  
  game("piedra", "papel");