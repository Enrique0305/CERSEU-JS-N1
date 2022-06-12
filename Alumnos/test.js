let mad = [1, 5, 7, 4, 8, 10, 99, 5, 6, 9]
function numeroMayor(listanumeros) {
    let numHigh = null
    listanumeros.forEach(element => {
        if (element > numHigh) {
            numHigh = element
        }
    }); 
    return numHigh;
}

function multiplosDeTres(listanumeros) {
    let resultado = []
    listanumeros.forEach(element => {
        if (element % 3 == 0) {
          resultado.push(element)
        }
    });
    return resultado;
}

let multiplos=multiplosDeTres(mad)
console.log(multiplos)

let multiploMayor = numeroMayor(multiplos)
console.log(multiploMayor)