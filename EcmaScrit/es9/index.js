/** Promise .finally: Es para saber cuando a terminado el llamdo y poder ejecutar alguna funcion o logica segun sea el caso
 * 
*/

const helloWorld =()=>{
    return new Promise((resolve,reject)=>{
        //condicion ? true :false
        (true)
        ? setTimeout(()=>resolve ('Hello World'),3000)
        : reject(new Error('Test Error, Ups !!'));
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error=>console.log(error))
    .finally(()=>console.log('Finalizo, FIN'));