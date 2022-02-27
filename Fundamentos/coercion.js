//La forma de convertir un type a otro:
//Coercion
//===Implicita ===

var a = 20;
var b= a+ "";

//mas ejemplos

var a=[1,2];
var b=[3,4];

//a+b //En este ejemplo, por la concatenacion, 
//ambos arrays son abligados a convertirse en strings y luego se juntan

//====Explicita==
var c = String(a);
var d = Number(c);
 //mas ejemplos

 var a=30;
 var b = a.toString();
 