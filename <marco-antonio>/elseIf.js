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
