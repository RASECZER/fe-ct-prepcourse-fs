/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function obtenerMayor(x, y) {
   // "x" e "y" son números enteros.
   // Retornar el número más grande.
   // Si son iguales, retornar cualquiera de los dos.
   // Tu código:
    if (x===y){
        console.log(x);
        return x;
    } else {
        if (x>y){
            console.log(x);
            return x;
        } else {
            console.log("muestro y ",y);
            return y;
          }
      }
}

function mayoriaDeEdad(edad) {
   // Determinar si la persona puede ingresar al evento según su edad.
   // Si tiene 18 años ó más debe retornar el string: "Allowed".
   // Caso contrario: "Not allowed".
   // Tu código:
    if (edad>=18){
        console.log("allowed");
        return "allowed";
    } else {
        console.log("Not allowed");
        return "Not allowed";
      }
}

function conection(status) {
   // El argumento "status" representa el estado de conexión de un usuario.
   // Si el estado es igual a 1, el usuario está "Online".
   // Si el estado es igual a 2, el usuario está "Away".
   // De lo contrario, presumimos que el usuario está "Offline".
   // Retornar el estado de conexión del usuario.
   // Tu código:
       switch (status){
        case 1:
            console.log("on line");
            return "on line";
        case 2:
            console.log("Away");
            return "Away";
        default:
            console.log("off line");
            return "off line";
    }
}

function saludo(idioma) {
   // Retornar un saludo en tres diferentes lenguajes:
   // Si "idioma" es "aleman", devuelve "Guten Tag!".
   // Si "idioma" es "mandarin", devuelve "Ni Hao!".
   // Si "idioma" es "ingles", devuelve "Hello!".
   // Si "idioma" no es ninguno de los anteriores o es `undefined` devuelve "Hola!".
   // Tu código:
       switch (idioma){
        case "aleman":
            console.log("Guten Tag!");
            return "Guten Tag!";
        case "mandarin":
            console.log("Ni Hao!");
            return "Ni Hao!";
        case "ingles":
            console.log("Hello!");
            return "Hello!";
        default:
            console.log("Hola!");
            return "Hola!";
    }
}

function colors(color) {
   // La función recibe un color. Retornar el string correspondiente:
   // En caso que el color recibido sea "blue"   --> "This is blue".
   // En caso que el color recibido sea "red"    --> "This is red".
   // En caso que el color recibido sea "green"  --> "This is green".
   // En caso que el color recibido sea "orange" --> "This is orange".
   // Si no es ninguno de esos colores           --> "Color not found".
   // IMPORTANTE: utilizar el statement SWITCH.
   // Tu código:
    switch (color){
        case "Blue":
            console.log("This is Blue");
            return "This is Blue";
        case "Red":
            console.log("This is Red");
            return "This is Red";
        case "Green":
            console.log("This is Green");
            return "This is Green";
        case "Orange":
            console.log("This is Orange");
            return "This is Orange";
        default:
            console.log("Color no Fund");
            return "Color no Fund";
    }   
}

function esDiezOCinco(num) {
   // Retornar true si "num" es 10 o 5.
   // De lo contrario, retornar false.
   // Tu código:
    if (num===10 || num===5){
        console.log("True");
        return true;
    } else {
        console.log("False");
        return false;
      }   
}

function estaEnRango(num) {
   // Retornar true si "num" es menor que 50 y mayor que 20.
   // De lo contrario, retornar false.
   // Tu código:
    if (num < 50 && num>20){
        console.log("True esta en el rango");
        return true;
    } else {
        console.log("False");
        return false;
      }   
}

function esEntero(num) {
   // Retornar true si "num" es un entero, ya sea positivo, negativo o cero.
   // Ejemplo: 0.8   ---> false
   // Ejemplo: 1     ---> true
   // Ejemplo: (-10) ---> true
   // De lo contrario, retorna false.
   // Tu código:
    if (num - Math.floor(num) == 0) {
        console.log("es entero");
        return true;
    } else {
        console.log("no es entero");
        return false;
      }
}

function fizzBuzz(num) {
   // Si "num" es divisible entre 3, retorna "fizz".
   // Si "num" es divisible entre 5, retorna "buzz".
   // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
   // De lo contrario, retorna false.
   // Tu código:
    if (num % 3 ===0 && num % 5 ===0){
        console.log("fizzBuzz");
        return "fizzBuzz";
    } else {
        if (num % 5 ===0){
            console.log("fizz por 5");
            return "fizz";
        } else {
            if (num % 3 ===0){
                console.log("fizz por 3");
                return "fizz";
            } else {
                console.log("es falso");
                return false;
              }
          }
      }
}

function operadoresLogicos(num1, num2, num3) {
   // La función recibe tres números distintos.
   // Si num1 es mayor a num2 y a num3, y además es positivo, retornar ---> "Numero 1 es mayor y positivo".
   // Si alguno de los tres números es negativo, retornar ---> "Hay negativos".
   // Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
   // Si todos los argumentos son cero, retornar ---> "Error".
   // Si no se cumple ninguna de las condiciones anteriores, retornar false.
   // Tu código:
    if (num1 === 0 && num2 === 0 && num3 === 0){// todos = 0
        console.log("Error");
        return "Error";}
    if (num1 < 0 || num2 < 0 || num3 < 0){ // hay negativos
        console.log("Hay Negativos");
        return "Hay Negativos";}
    if (num1>0 && num1 > num2  && num1>num3){ // num1 positivo y mayor a num2 y num3
            console.log("Numero 1 es mayor y positivo");
            return "Numero 1 es mayor y positivo"; }
    else if (num3>num1 && num3 > num2 ){
            num3 = num3 + 1;
            console.log("se incremento num3", num3);
            return num3;}
        else {
            console.log("Ninguna de las condiciones");
            return false;}
}

function esPrimo(num) {
   // Retornar true si "num" es primo.
   // De lo contrario retorna false.
   // [Pista 1]: un número primo sólo es divisible por sí mismo y por 1.
   // [Pista 2]: puedes resolverlo utilizando un `bucle for`.
   // [Nota]: los números negativos, 0 y 1 NO son números primos.
   // Tu código:
    if (num < 2){
        console.log("Es menor de 2", num);
        return false;}
    for(i=2; i<num; i++){
        if (num%i == 0){
            console.log("no es primo", num);
            return false;}
    }
    console.log("Es primo", num);
    return true;
}

function esVerdadero(valor) {
   // Si "valor" es verdadero retornar "Soy verdadero".
   // Caso contrario, retornar "Soy falso".
   // Tu código:
    if (valor == true ){
        console.log("Soy Verdadero");
        return "Soy Verdadero";}
    else {
        console.log("Soy Falso");
        return "Soy Falso";}
}

function tieneTresDigitos(num) {
   // Si el número recibido tiene tres dígitos retornar true.
   // Caso contrario, retornar false.
   // Tu código:
    if (num > 99 && num < 1000){
        console.log("numero de tres digitos ", num);
        return true;}
    else {
        console.log("no es de tres digitos ", num);
        return false;}
}

function doWhile(num) {
   // Implementar una función que aumente el valor recibido en 5 hasta un límite de 8 veces.
   // Retornar el valor final.
   // Utilizar el bucle Do-While.
   // Tu código:
    var i = 0;
    while (i < 8) { 
        num=num+5;
 //       console.log("valor de i ", i);
        i++;
    }
    console.log("valor resultante ", num);
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   obtenerMayor,
   mayoriaDeEdad,
   conection,
   saludo,
   colors,
   esDiezOCinco,
   estaEnRango,
   esEntero,
   fizzBuzz,
   operadoresLogicos,
   esPrimo,
   esVerdadero,
   tieneTresDigitos,
   doWhile,
};
