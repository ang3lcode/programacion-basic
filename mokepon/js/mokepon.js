function iniciarJuego(){
    let botonMascotaJugador=document.getElementById('boton-mascota');
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador);
}
function seleccionarMascotaJugador(){
    let inputHipodoge=document.getElementById('hipodoge')
    let inputCapipepo=document.getElementById('capipepo')
    let inputRatigueya=document.getElementById('ratigueya')
    let spanMascotaJugador = document.getElementById('mascota-jugador');
    if (inputHipodoge.checked){
        spanMascotaJugador.innerHTML = 'hipodoge'
    } else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML = 'Capipepo'
    } else if (inputRatigueya.checked){
        spanMascotaJugador.innerHTML = 'Ratigueya'
    } else {
        alert('solecciona uno')
    }
    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo (){
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo');
    let ataqueAleatorio = aleatorio(1,3);

    if (ataqueAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = 'hipodoge';
    } else if (ataqueAleatorio == 2){
        spanMascotaEnemigo.innerHTML = 'Capipepo';
    }else {
        spanMascotaEnemigo.innerHTML = 'Ratigueya';
    }
}

let aleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min +1 ) + min);
}

window.addEventListener('load',iniciarJuego);