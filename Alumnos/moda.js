
function moda2 (listaquerecibe){
    let lista1Count = {};

    listaquerecibe.forEach(element => {
      if(lista1Count[element]){
        lista1Count[element] += 1
      }else{
        lista1Count[element] = 1
      }
     
    })
  let masserepite = null;
  let resultados = [];
  Object.entries(lista1Count).forEach(elemento=>{
    console.log(elemento);
    if(elemento[1]>masserepite){
      masserepite = elemento[1];
      resultados.push(elemento);
    }
    if(elemento[1]==masserepite){
        let found = resultados.find(element => element == elemento);
        if(!found){
            resultados.push(elemento);
        }
    }
  })
return resultados;
}


console.log('la moda es:',moda2([1,1,1,2,2,2,5,4,7,7,7]))