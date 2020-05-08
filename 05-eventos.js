const EventEmitter = require('events')

class entrarAlaCasa extends EventEmitter {}

const entrarCasa = new entrarAlaCasa()
var nombreEvento = 'entrar por la puerta de adelante'
//evento que escucha
// ON
entrarAlaCasa.on(nombreEvento, (nombre)=> {
    console.log(`saludar a ${nombre}, que ingreso por la puerta de adelante`);
})

//evento que emite
// EMIT

entrarAlaCasa.emit(nombreEvento, 'Israel')