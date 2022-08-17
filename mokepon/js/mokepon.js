let ataqueJugador
let ataqueEnemigo

function iniciarJuego(){
    let botonMascotaJugador=document.getElementById('boton-mascota');
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador);

    let botonFuego = document.getElementById('boton-fuego');
    botonFuego.addEventListener('click',ataqueFuego);
    let botonAgua = document.getElementById('boton-agua');
    botonAgua.addEventListener('click',ataqueAgua);
    let botonTierra = document.getElementById('boton-tierra');
    botonTierra.addEventListener('click',ataqueTierra);
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
    let mascotaAleatorio = aleatorio(1,3);

    if (mascotaAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = 'hipodoge';
    } else if (mascotaAleatorio == 2){
        spanMascotaEnemigo.innerHTML = 'Capipepo';
    }else {
        spanMascotaEnemigo.innerHTML = 'Ratigueya';
    }
}
function ataqueFuego(){
    ataqueJugador = 'Fuego'
    ataqueAleatorioEnemigo()
}
function ataqueAgua(){
    ataqueJugador = 'Agua'
    ataqueAleatorioEnemigo()
}
function ataqueTierra(){
    ataqueJugador = 'Tierra'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1, 3);
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'fuego'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'agua'
    } else {
        ataqueEnemigo = 'tierra'
    }
}

let aleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min +1 ) + min);
}

window.addEventListener('load',iniciarJuego);