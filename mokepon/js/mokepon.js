const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
const sectionReiniciar = document.getElementById('reiniciar');
const botonMascotaJugador=document.getElementById('boton-mascota');

const botonReiniciar = document.getElementById('boton-reiniciar');

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota');

const spanMascotaJugador = document.getElementById('mascota-jugador');

const spanMascotaEnemigo = document.getElementById('mascota-enemigo');

const spanVidasJugador=document.getElementById('vidas-jugador');
const spanVidasEnemigo=document.getElementById('vidas-enemigo');

const sectionMensaje = document.getElementById('resultado');
const ataqueDelJugador = document.getElementById('ataque-Del-Jugador');
const ataqueDelEnemigo = document.getElementById('ataque-Del-Enemigo');

const sectionMensajes=document.getElementById('resultado');

const contenedirTarjetas =document.getElementById('contenedorTarjetas');

const contenedorAtaques = document.getElementById('contenedorAtaques');

let ataqueJugador
let ataquesMokepon
let ataqueEnemigo = []
let ataquesMokeponEnemigo
let opcionDeMokepones
let inputHipodoge
let inputCapipepo
let inputRatigueya
let botonFuego 
let botonAgua 
let botonTierra 
let botones =[]
let ataqueJugador2 = []
let vidasJugador = 3
let vidasEnemigo = 3

let mokepones = []
class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let hipodoge = new Mokepon('Hipodoge','./assets/mokepons_mokepon_hipodoge_attack.webp', 3);
let capipepo = new Mokepon('Capipepo','./assets/mokepons_mokepon_capipepo_attack.webp', 3);
let ratigueya = new Mokepon('Ratigueya','./assets/mokepons_mokepon_ratigueya_attack.webp', 3);

hipodoge.ataques.push(
    {nombre:'💧', id:'boton-agua'},
    {nombre:'💧', id:'boton-agua'},
    {nombre:'💧', id:'boton-agua'},
    {nombre:'🔥', id:'boton-fuego'},
    {nombre:'🌱', id:'boton-tierra'}
);
capipepo.ataques.push(
    {nombre:'🌱', id:'boton-tierra'},
    {nombre:'🌱', id:'boton-tierra'},
    {nombre:'🌱', id:'boton-tierra'},
    {nombre:'💧', id:'boton-agua'},
    {nombre:'🔥', id:'boton-fuego'}
);
ratigueya.ataques.push(
    {nombre:'🔥', id:'boton-fuego'},
    {nombre:'🔥', id:'boton-fuego'},
    {nombre:'🔥', id:'boton-fuego'},
    {nombre:'💧', id:'boton-agua'},
    {nombre:'🌱', id:'boton-tierra'}
);
mokepones.push(hipodoge,capipepo,ratigueya)


function iniciarJuego(){    
    sectionSeleccionarAtaque.style.display = 'none';    

    mokepones.forEach((mokepon)=>{
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
        `
        contenedirTarjetas.innerHTML += opcionDeMokepones;
        inputHipodoge=document.getElementById('Hipodoge');
        inputCapipepo=document.getElementById('Capipepo');
        inputRatigueya=document.getElementById('Ratigueya');
    })

    sectionReiniciar.style.display = 'none'; 

    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador);   

       
    botonReiniciar.addEventListener('click', reiniciarJuego);
}
function seleccionarMascotaJugador(){    
    sectionSeleccionarMascota.style.display = 'none';    
    sectionSeleccionarAtaque.style.display = 'flex';    
    if (inputHipodoge.checked){
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
    } else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
    } else if (inputRatigueya.checked){
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    } else {
        alert('solecciona uno')
    }
    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo()
}
function extraerAtaques(mascotaJugador) {
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
        }        
    }
    mostrarAtaques(ataques)
}
function mostrarAtaques(ataques){
    ataques.forEach((ataques) => {
        ataquesMokepon = `
        <button class="boton-ataque bAtaque" id=${ataques.id}>
        ${ataques.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon;
    })
    botonFuego = document.getElementById('boton-fuego');
    botonAgua = document.getElementById('boton-agua');
    botonTierra = document.getElementById('boton-tierra');

    botones = document.querySelectorAll('.bAtaque')

    // botonFuego.addEventListener('click',ataqueFuego);    
    // botonAgua.addEventListener('click',ataqueAgua);    
    // botonTierra.addEventListener('click',ataqueTierra); 
}
function secuenciaAtaque() {
    botones.forEach((boton)=>{
        boton.addEventListener('click', (e)=> {
            if (e.target.textContent === '🔥') {
                ataqueJugador2.push('fuego')
                console.log(ataqueJugador2)
                boton.style.background = '#112f58'
            }else if(e.target.textContent === '💧') {
                ataqueJugador2.push('agua')
                console.log(ataqueJugador2)
                boton.style.background = '#112f58'
            } else {
                ataqueJugador2.push('tierra')
                console.log(ataqueJugador2)
                boton.style.background = '#112f58'
            }
            ataqueAleatorioEnemigo()
        })
    })
}
function seleccionarMascotaEnemigo (){
    let mascotaAleatorio = aleatorio(0, mokepones.length -1);   
    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatorio].nombre
    ataquesMokeponEnemigo = mokepones[mascotaAleatorio].ataques
    secuenciaAtaque() 
}
// function ataqueFuego(){
//     ataqueJugador = 'fuego'
//     ataqueAleatorioEnemigo()
// }
// function ataqueAgua(){
//     ataqueJugador = 'agua'
//     ataqueAleatorioEnemigo()
// }
// function ataqueTierra(){
//     ataqueJugador = 'tierra'
//     ataqueAleatorioEnemigo()
// }
function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(0, mokepones.length -1);
    if (ataqueAleatorio == 0 || ataqueAleatorio ==1) {
        ataqueEnemigo.push('FUEGO')
    } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
        ataqueEnemigo.push('AGUA')
    } else {
        ataqueEnemigo.push('TIERRA')
    } 
    console.log(ataqueEnemigo) 
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