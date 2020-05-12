// API, rest API
// Programacion funcional

/*function programacionFuncional(numero1, () => { }, l) {
}*/

function primeraFuncion() {
    setTimeout(
        () => {
            console.log('primera')
        }, 500
    )

}

function segundaFuncion() {
    console.log('2')
}

//primeraFuncion()
//segundaFuncion()

function saluda(nombre, callback) {
    console.log('saludo a', nombre)
    callback()
}

function funcionCallback() {
    primeraFuncion()
    segundaFuncion()
    console.log('ya salude')
}

saluda('Kevin', () => {
console.log('saludaste')
})
