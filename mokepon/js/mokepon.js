function iniciarJuego(){
    let botonMascotaJugador=document.getElementById('boton-mascota');
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador);
}
function seleccionarMascotaJugador(){
    let inputHipodoge=document.getElementById('hipodoge')
    let inputCapipepo=document.getElementById('capipepo')
    let inputRatigueya=document.getElementById('ratigueya')
    
    if (inputHipodoge.checked){
        alert('hipodoge')
    } else if(inputCapipepo.checked){
        alert('Capipepo')
    } else if (inputRatigueya.checked){
        alert('Ratigueya')
    } else {
        alert('solecciona uno')
    }
}
window.addEventListener('load',iniciarJuego);