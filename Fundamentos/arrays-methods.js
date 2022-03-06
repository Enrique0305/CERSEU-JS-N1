var articulos= [
    {nombre:'Bici', costo:500},
    {nombre:'Tv', costo:1500},
    {nombre:'Libro', costo:200},
    {nombre:'Licuadora', costo:800},
    {nombre:'teclado', costo:150},
    {nombre:'laptop', costo:3000},
    {nombre:'audifonos', costo:300}
]

//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map
//Metodos para recorrer arrays

//Metedo filter
/**El método filter() crea un nuevo array 
 * con todos los elementos que cumplan la condición implementada por la función dada. */

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo<=500;
})
console.log(articulosFiltrados);

//Metodos Map
/**El método map() crea un nuevo array con los resultados de la
 *  llamada a la función indicada aplicados a cada uno de sus elementos. */

var nombreArticulos= articulos.map(function(articulo){
    return articulo.nombre;
});
 console.log(nombreArticulos);

 //Metodo forEach
 /**El método forEach() ejecuta la función indicada una vez por cada elemento del array.

 */

 articulos.forEach(function(articulo){
     console.log(articulo.nombre);
 })
 //Metodo Find
 /** El método find() devuelve el valor del primer elemento del array que 
  * cumple la función de prueba proporcionada. */
 var encuentraArticulos = articulos.find(function(articulo){
     return articulo.nombre === 'laptop'
 });