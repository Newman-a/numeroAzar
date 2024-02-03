console.log = () => {};

let numero = Math.floor(Math.random() * 100) + 1

let numeroEntrada = document.getElementById("numeroEntrada")
let mensaje = document.getElementById("mensaje")

let intento = document.getElementById('intento')
let intentos = 10

// Esta accion se va a ejecutar cuando se toque el boton

function comprobar() {
    
    let numeroIngresado = parseInt(numeroEntrada.value)

    if(numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)){
        document.getElementById('intento').disabled = true;
        mensaje.textContent = 'Por favor, introduce un numero valido entre 1 y 100';
        mensaje.style.color = 'black';
    } else {
        intentos --
        intento.textContent = intentos
    }

    if(intentos === 0){
        mensaje.textContent = 'Te quedaste sin intentos para jugar'
        document.getElementById('f').disabled = true;
        document.getElementById('numeroEntrada').disabled = true;
        let reinicio = document.getElementById('recargar')
        reinicio.style.backgroundColor = '#fff'
        reinicio.style.padding = '5px'
        reinicio.style.margin = '5px'
        reinicio.style.border = 'none'
        
        reinicio.innerHTML = '<a class="derrota" href="#">¡Intentar otra vez!😭</a>' 
        return
    }


    if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
        mensaje.textContent = 'Por favor, introduce un numero valido entre 1 y 100'
        mensaje.style.color = 'black';
        
        return
    }

    if (numeroIngresado === numero) {
        mensaje.textContent = 'Felicitaciones, has adivinado el numero';
        mensaje.style.color = 'green';
        numeroEntrada.disabled = true;
        intentos = 0;
        document.getElementById('f').disabled = true;
        let reinicio = document.getElementById('recargar')
        reinicio.style.backgroundColor = '#fff'
        reinicio.style.padding = '5px'
        reinicio.style.margin = '5px'
        reinicio.style.border = 'none'
        
        reinicio.innerHTML = '<a class="victoria" href="#">¡Jugar otra vez!😁</a>'
        
    } else if (numeroIngresado < numero) {
        mensaje.textContent = 'Mas alto, el numero es mayor al que dijiste';
        mensaje.style.color = 'red';
    } else {
        mensaje.textContent = 'Mas bajo, el numero es menor al que dijiste';
        mensaje.style.color = 'red';
    }
    
}

function recargar(){
    window.location.reload()
}