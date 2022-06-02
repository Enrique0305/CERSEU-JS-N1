let result;
let cuponA = document.getElementById("textoCuponA").value;
let cuponB= document.getElementById('textoCuponB').value;
function dscto(costo,cuponA){ 
    if (cuponA =="AXBGH" && costo <=150 ){
        precioFinal=costo*.923;    
    } else if(cuponB =="QWERTY" && costo >150 ){
        precioFinal=costo*9.165;  
    } else {
        precioFinal= "Verifica tu cupón";
    }
    document.getElementById("resulDscto").innerHTML = result;
}