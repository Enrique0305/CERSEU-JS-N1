let mad = [1, 5, 7, 4, 8, 10, 99, 5, 6, 9, 12,24]
function numeroPar(listanumeros) {
    let numPar = []
        listanumeros.forEach(element => {
        if (element % 2 == 0 && element % 3 == 0 ) {
            numPar.push(element)
        }
    }); 
    return numPar;
}

let multiploMayor = numeroPar(mad)
console.log(multiploMayor)