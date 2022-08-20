let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
let sectionReiniciar = document.getElementById('reiniciar');
let botonMascotaJugador=document.getElementById('boton-mascota');
let botonFuego = document.getElementById('boton-fuego');
let botonAgua = document.getElementById('boton-agua');
let botonTierra = document.getElementById('boton-tierra');
let botonReiniciar = document.getElementById('boton-reiniciar');

let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota');
let inputHipodoge=document.getElementById('hipodoge');
let inputCapipepo=document.getElementById('capipepo');
let inputRatigueya=document.getElementById('ratigueya');
let spanMascotaJugador = document.getElementById('mascota-jugador');

let spanMascotaEnemigo = document.getElementById('mascota-enemigo');

let spanVidasJugador=document.getElementById('vidas-jugador');
let spanVidasEnemigo=document.getElementById('vidas-enemigo');

let sectionMensaje = document.getElementById('resultado');
let ataqueDelJugador = document.getElementById('ataque-Del-Jugador');
let ataqueDelEnemigo = document.getElementById('ataque-Del-Enemigo');

let sectionMensajes=document.getElementById('resultado');


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