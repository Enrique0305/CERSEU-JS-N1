let btnCal = document.getElementById('calcular');
let inputBase = document.getElementById('base');
let inputAltura = document.getElementById('altura');

function calcularAreaT(){
    let resultadoArea= base.value*altura.value*0.5;
    console.log(resultadoArea)
    document.getElementById('resultado').textContent=resultadoArea
}


btnCal.addEventListener('click',calcularAreaT)
inputAltura.addEventListener('keydown',(e)=>{
    if(e.key=='Enter'){
        calcularAreaT()
    }
})

inputBase.addEventListener('keydown',(e)=>{
    if(e.key=='Enter'){
        calcularAreaT()
    }
})

//APlicacion de descuentos
let btnDscto = document.getElementById('dscto');
let inputCupon = document.getElementById('cupon');
let inputPrecio = document.getElementById('precio');
function calcularDscto(){
    let porcentaje = 0
    if(cupon.value=='QWERTY'){
        porcentaje=0.955
    } else if(cupon.value == 'ASDFG'){
        porcentaje=0.925
    }
    let precio = inputPrecio.value
    let resultadoPrecio=precio*porcentaje;
    console.log(resultadoPrecio)
    document.getElementById('descuento').textContent=resultadoPrecio
}
btnDscto.addEventListener('click',calcularDscto)
inputCupon.addEventListener('keydown',(e)=>{
    if(e.key=='Enter'){
        calcularDscto()
    }
})

//Moda
function moda2 (listaM){
    let lista1Count = {};

    listaM.forEach(element => {
      if(lista1Count[element]){
        lista1Count[element] += 1
      }else{
        lista1Count[element] = 1
      }
     
    })
  let masserepite = null;
  let resultado = null;
  Object.entries(lista1Count).forEach(elemento=>{
    console.log(elemento);
    if(elemento[1]>masserepite){
      masserepite = elemento[1];
      resultado = elemento;
    }
  })
return resultado;
}

console.log(moda2(lista1))