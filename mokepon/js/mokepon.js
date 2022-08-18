let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego(){
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'

    let botonMascotaJugador=document.getElementById('boton-mascota');
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador);

    let botonFuego = document.getElementById('boton-fuego');
    botonFuego.addEventListener('click',ataqueFuego);
    let botonAgua = document.getElementById('boton-agua');
    botonAgua.addEventListener('click',ataqueAgua);
    let botonTierra = document.getElementById('boton-tierra');
    botonTierra.addEventListener('click',ataqueTierra);

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego);
}
function seleccionarMascotaJugador(){
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'block'

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
    ataqueJugador = 'fuego'
    ataqueAleatorioEnemigo()
}
function ataqueAgua(){
    ataqueJugador = 'agua'
    ataqueAleatorioEnemigo()
}
function ataqueTierra(){
    ataqueJugador = 'tierra'
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
    
   combate() 
}
// aqui tenia el error
function combate(){ 
    let spanVidasjugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')


    if (ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE")
    } else if(ataqueJugador=='fuego'&&ataqueEnemigo=='tierra' || 
    ataqueJugador=='agua'&&ataqueEnemigo=='fuego' || 
    ataqueJugador=='tierra'&&ataqueEnemigo=='agua'){
        crearMensaje("GANASTE")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo;
    } else{
        crearMensaje("PERDISTE")
        vidasJugador --
        spanVidasjugador.innerHTML = vidasJugador;
    }
    // revisar vidas
    revisarVidas()
}
let revisarVidas = () => {
    if (vidasEnemigo == 0) {
        crearMensajeFinal("felicitaciones ganaste :D")
    } else if (vidasJugador == 0){
        crearMensajeFinal("lo siento perdiste :( ")
    } 
}

function crearMensaje(resultado){
    let sectionMensaje = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota atacó con '+ataqueJugador+', las mascota del enemigo atacó con '+ataqueEnemigo+'- '+resultado + '🎉';

    sectionMensaje.appendChild(parrafo)
}
function crearMensajeFinal(resultadoFinal){
    let sectionMensaje = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal;

    sectionMensaje.appendChild(parrafo)

    let botonFuego = document.getElementById('boton-fuego');
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua');
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra');
    botonTierra.disabled = true

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'

}
let reiniciarJuego = () => {
    location.reload()
}
let aleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min +1 ) + min);
}

window.addEventListener('load',iniciarJuego);