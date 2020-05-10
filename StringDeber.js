/*
* Deber 1
* Invertir Palabra
* @author Israel Quishpe
*/

var palabra = 'COMERCIO ELECTRONICO';
var invertirCadena = palabra => palabra
.split("")
.reverse()
.join("")

console.log(' ')
console.log('  DEBER_1')
console.log(' ')
console.log('=>  Palabra Original ==>> %s <==> Palabra Invertida ==>> %s', palabra, invertirCadena(palabra))


//======================================================================================================

/*
* Deber 2
* UTILICEN FUNCIONES
- primera palabra en mayuscula
- la palabra de la mitad en mayuscula
- ultima palabra  en mayuscula
- sumar todos los punto
- sumar todos las comas
*/
console.log(' ')
console.log('  DEBER_2')
console.log(' ')
var texto = 'Realiza fotografías de 20 megapíxeles y puede utilizar un perfil de color Dlog-M de 10 bits, con el que se obtiene un rango dinámico más amplio al registrar hasta mil millones de colores. Esto queda bastante por encima de los 16 millones de colores de los perfiles de 8 bits, pudiendo dejar más margen y libertad en la edición posterior del material. Por su parte, el Mavic 2 Zoom cuenta con un sensor CMOS de 1/2,3 pulgadas y zoom óptico, lo cual da nombre al propio producto. En este caso es capaz de realizar capturas de 12 megapíxeles, disponiendo un zoom automático híbrido (que combina detección de fase y contraste) de una función de "Superresolución" que recurre al zoom óptico para realizar nueve fotografías y componer una sola con todas ellas de 48 megapíxeles (con más detalle).'


var principio = texto => texto
.split(" ")
.slice(0, 1)
.join()
.toUpperCase()

console.log('=> Palabra Inicial Mayus ==>>', principio(texto))

var mitad = (texto)=>{
    var pMitad = texto.split(" ")
    media = pMitad[(pMitad.length -1)/2]
    return media
}
console.log('=> Palabra Mitad Mayus   ==>>', mitad(texto.toUpperCase()))

var final = texto => texto
.split(" ")
.slice(-1)
.join()
.toUpperCase()

console.log('=> Palabra Final Mayus   ==>>', final(texto))

var puntos = texto => texto
.split(".")
.length-1

console.log('=> Total de puntos       ==>> ', puntos(texto))

var comas = texto => texto
.split(",")
.length-1

console.log('=> Total de comas        ==>> ', comas(texto))