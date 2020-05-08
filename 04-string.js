
//contar cuantos caracteres tiene mi variable
var nombre = 'Israel'
//console.log(nombre.length);

//encuentra la posici'on del carecter que deseo buscar
//console.log(nombre.indexOf('e'));

//encuentra la posici'on del carecter que deseo buscar
//console.log(nombre.search('r'));

//divide en la posicion indicada
//console.log(nombre.slice(1, 4));

//toma en cuenta hasta la ultima posisicion
//console.log(nombre.substr(1, 4))


//console.log(nombre.toLowerCase());

//console.log(nombre.toUpperCase());

//cambia la primera ocurrencia por una alterna, no toma encuenta una segunda ocurrencia con el mismo valor
var texto = 'hola mundo :v hola'
console.log(texto.replace('hola', 'hello'))

//concatena con otra variable
console.log(texto.concat(' ', nombre))
console.log(texto.concat(', ', nombre))

//otra manera de poder concatenar
console.log(`${texto} mas mi nombre: ${nombre}`)

//strim quita los espacios vacios
console.log(texto.trim())

//split da como resultado un arreglo
console.log(texto.split())
console.log(texto.split(''))

//Retorna la letra dependiendo la posiscion en la que se encuentre
console.log(nombre.charAt(1))

//DEBER PALABRA = 'COMERCIO ELECTRONICO', que sea invierta la palabra -> OCINORTCELE OICREMOC

