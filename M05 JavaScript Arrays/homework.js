/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
    console.log(arr[0]);
}
devolverPrimerElemento(arr=[1,2,3,4,5]);


function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
    console.log(arr[arr.length-1]);
}
devolverUltimoElemento(arr=[1,2,3,4,5]);

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
    console.log(arr.length);
}
obtenerLargoDelArray(arr=[1,2,3,4,5]);

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
    var nuevoArreglo= arr.map((num)=>{return num + 1});
    console.log(nuevoArreglo);
}
incrementarPorUno(arr=[1,2,3,4,5]);

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
    console.log(arr);
    arr.push(elemento);
    console.log(arr);
}
agregarItemAlFinalDelArray(arr=[1,2,3,4,5], 6);

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
    console.log(arr);
    arr.unshift(elemento);
    console.log(arr);
}
agregarItemAlComienzoDelArray(arr=[1,2,3,4,5], 6); 

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
    var unido=palabras.join(' ');
    console.log(unido);
}
dePalabrasAFrase(['ejercicio','de','unir','elementos','de','un','arreglo']); 

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
    var swok=0;
    array.forEach(num => { if(num===elemento){swok=1;}    });
    console.log(swok);
    if(swok===1){console.log('existe el elemento',elemento); return true; }
    else{console.log('No existe el elemento',elemento); return false;}        
}
arrayContiene([1,2,3,4,5], 4);


function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
    var sumatoria=0;
    arrayOfNums.forEach(num => { sumatoria=sumatoria+num   });
    console.log(sumatoria);
}
agregarNumeros([1,2,3,4,5]);

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
    var sumaNotas=0

    for (var i = 0; i<resultadosTest.length;i++) 
        {sumaNotas=sumaNotas+(resultadosTest[i]);}
    console.log(sumaNotas/resultadosTest.length);
}
promedioResultadosTest([4,5,6,4,5,6]) 

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
    var masGrande=0;
    arrayOfNums.forEach(num => { if(num>masGrande){masGrande=num;}   });
    console.log('el numero mas grande es ', masGrande);

}
numeroMasGrande([1,8,3,4,5]);

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
    if(arguments.length===0){console.log('sin elementos ',0); return 0;}
    else if(arguments.length===1){console.log('un solo elemento ',arguments[1]); return arguments[1];}

    var producto=1
    arguments.forEach(num => { producto = producto *num;}   );
    console.log(producto); return producto;
}
multiplicarArgumentos([1,2,3,4]);


function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
    var mayorQue=0
    array.forEach(num => { if(num>18){mayorQue=mayorQue+1;}}   );
    console.log('mayores a 18 = ',mayorQue); return mayorQue;
}
cuentoElementos([18,28,38,48,58]); 


function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
    if (numeroDeDia===1 || numeroDeDia===7){console.log('Es fin de semana');}
    else{console.log('Es dia laboral');}
}
diaDeLaSemana(7);

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
    var noNumero=num.toString();
    if (noNumero.substring(0,1)==='9'){console.log('el numero inicia en 9-----> ',num); return true;}
    else{console.log('el numero NO inicia en 9-----> ',num); return false;}
}
empiezaConNueve(993);


function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
    var swok=0;
    var compara=array[0];
    array.forEach(num => { if(num!=compara){swok=1;}}   );

    if(swok===0){console.log('los elementos son iguales ',array); return true; }
    else{console.log('los elementos NO son iguales ',array); return false;}        
}
todosIguales([3,3,3,3,3,1]);


function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
    var swok=0;
    var nMeses=[];
    if (array.indexOf('Enero')===-1) {swok=1}     
    else{nMeses[1]=array.at(array.indexOf('Enero'))}
    if (array.indexOf('Marzo')===-1) {swok=1}     
    else{nMeses[2]=array.at(array.indexOf('Marzo'))}
    if (array.indexOf('Noviembre')===-1) {swok=1}     
    else{nMeses[3]=array.at(array.indexOf('Noviembre'))}

    if (swok===1){console.log('No se encontraron los meses pedidos')}
    else{console.log(nMeses)}
}

mesesDelAño(['Noviembre','Enero','Febrero','Marzo','Abril']);
mesesDelAño(['Noviembre','Noviembre','Febrero','Marzo','Abril']);

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
    var tabSeis=[];
    for (var i=0; i<60; i++){
       tabSeis.push(6*i);  }
    console.log(tabSeis);
}
tablaDelSeis();


function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
    var mayor=[];
    for (var i=0; i<array.length; i++){
        if(array[i]>100){mayor.push(array[i])}}
    console.log(mayor);

}
mayorACien([100,134,123,145,185,6]) 


/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
    var origen=num;
    var nuevo=[];
    for(var i = 0; i<10; i++){
        nuevo.push(num=(num+2))
        if(i===num){console.log('Se interrumpió la ejecución ',origen); break;}    }

    console.log(nuevo);

}
breakStatement(-2)// se interrumpe
breakStatement(-4)// se interrumpe
breakStatement(-1)


function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
    var nuevo=[];
    var numero=num;
    for(var i = 0; i<10; i++){
        if(i===5) {continue}
        numero=numero+2;
        nuevo.push(numero)   }

    console.log(nuevo);
}

continueStatement(0)


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
