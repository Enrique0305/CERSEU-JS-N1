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
