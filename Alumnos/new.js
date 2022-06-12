
let mad = [1, 5, 7, 4, 8, 10, 99, 5, 6, 9]
function numeroMayor(listanumeros) {
    let numHigh = null
        listanumeros.forEach(element => {
        if (element > numHigh && element % 3 == 0 ) {
            numHigh = element
        }
    }); 
    return numHigh;
}

let multiploMayor = numeroMayor(mad)
console.log(multiploMayor)
