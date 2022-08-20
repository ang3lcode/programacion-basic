const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
const sectionReiniciar = document.getElementById('reiniciar');
const botonMascotaJugador=document.getElementById('boton-mascota');
const botonFuego = document.getElementById('boton-fuego');
const botonAgua = document.getElementById('boton-agua');
const botonTierra = document.getElementById('boton-tierra');
const botonReiniciar = document.getElementById('boton-reiniciar');

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota');
const inputHipodoge=document.getElementById('hipodoge');
const inputCapipepo=document.getElementById('capipepo');
const inputRatigueya=document.getElementById('ratigueya');
const spanMascotaJugador = document.getElementById('mascota-jugador');

const spanMascotaEnemigo = document.getElementById('mascota-enemigo');

const spanVidasJugador=document.getElementById('vidas-jugador');
const spanVidasEnemigo=document.getElementById('vidas-enemigo');

const sectionMensaje = document.getElementById('resultado');
const ataqueDelJugador = document.getElementById('ataque-Del-Jugador');
const ataqueDelEnemigo = document.getElementById('ataque-Del-Enemigo');

const sectionMensajes=document.getElementById('resultado');


let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego(){    
    sectionSeleccionarAtaque.style.display = 'none';    
    sectionReiniciar.style.display = 'none';    
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador);    
    botonFuego.addEventListener('click',ataqueFuego);    
    botonAgua.addEventListener('click',ataqueAgua);    
    botonTierra.addEventListener('click',ataqueTierra);    
    botonReiniciar.addEventListener('click', reiniciarJuego);
}
function seleccionarMascotaJugador(){    
    sectionSeleccionarMascota.style.display = 'none';    
    sectionSeleccionarAtaque.style.display = 'flex';    
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
    if(ataqueEnemigo==ataqueJugador){
        crearMensaje("EMPATE")
    } else if(ataqueJugador=='fuego' && ataqueEnemigo=='tierra'){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML=vidasEnemigo
    }else if(ataqueJugador=='agua'&&ataqueEnemigo=='fuego'){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML=vidasEnemigo
    }else if(ataqueJugador=='tierra'&&ataqueEnemigo=='agua'){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML=vidasEnemigo
    }else{crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML=vidasJugador
    }
    revisarVidas()
}
function revisarVidas(){
    if(vidasEnemigo==0){
        crearMensajeFinal("FELICITACIONES! Ganaste :)")
    }else if(vidasJugador==0){
        crearMensajeFinal('Lo siento, perdiste :(')
    }
}
function crearMensaje(resultado){
    let nuevoAtaqueJugador = document.createElement('p')
    let nuevoAtaqueEnemigo = document.createElement('p')
    
    sectionMensaje.innerHTML = resultado
    nuevoAtaqueJugador.innerHTML= ataqueJugador
    nuevoAtaqueEnemigo.innerHTML= ataqueEnemigo
    
    ataqueDelJugador.appendChild(nuevoAtaqueJugador)
    ataqueDelEnemigo.appendChild(nuevoAtaqueEnemigo)
}
function crearMensajeFinal(resultadoFinal){
    sectionMensajes.innerHTML=resultadoFinal
    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true
    sectionReiniciar.style.display = 'block'
}
let reiniciarJuego = () => {
    location.reload()
}
function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
window.addEventListener('load',iniciarJuego);