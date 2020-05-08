function saludar() {
    return 'hola'
}

saludar()
console.log(saludar())

// funciones anonimas

var funcionAnonima = function () {
    return 'funcion anonima'
}
console.log(funcionAnonima())
// funciones arrow fat function
var funcionFechaGorda = (a, b) => {
    return a + b;
}

console.log(funcionFechaGorda('a', { a: 1 }));

var json = {
    suma: (a, b) => {
        return a + b;
    }
}
console.log(json.suma(1,2));