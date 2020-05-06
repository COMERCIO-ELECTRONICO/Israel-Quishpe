// JSON -> JAVASCRIPT OBJECT NOTATION 
/* JSON 
LIGERO, INTERCAMBIA DATOS, FACIL ESCRITURA Y LECTURA
{
    NOMBRE: {
        KE:{
        }
    }
}
*/
// TIPO DE DATOS (NUMBER), STRING, BOOL 
// VAR - CONST -> 
var json = {
    nombre: 'kevin',
    edad: 25,
    soltero: true,
    fecha: new Date('1995/02/24'),
}

console.log(json.nombre)
console.log(json['edad'])

json.nombre = 'nuevo'

json.direccion = 'solanda'

console.log(json)

delete json.direccion

console.log(json)

/*
console.error()
console.info()
console.warn()
*/
