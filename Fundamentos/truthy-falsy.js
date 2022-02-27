//Truthy y falsy: son valores que son verdaderos o falsos
//Falsy (false)
Boolean(0)
false
Boolean('')
false
Boolean(undefined)
false
Boolean(null)
false

//truthy (true)
Boolean('Hello')
true

Boolean('c')
true
Boolean(3)
true

Boolean(1)
true

Boolean({})
true
Boolean([])
true
Boolean([1,2])
true
Boolean({nombre:'enrique',edad:25})
true

//Para que podemos utilizar esto: para generar condiciones segun el valor que le damos

if(InputEvent.value){
   // ...
}