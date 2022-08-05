let ataqueJugador
let ataqueEnemigo
let resultado
let resultadoFinal
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego(){
    let seccionReiniciar = document.getElementById("reiniciar")
    seccionReiniciar.style.display = "none"

    let seccionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    seccionSeleccionarAtaque.style.display = "none"

    let botonMascotaJugador=document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click",seleccionarMascotaJugador)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click",ataqueFuego)
        
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click",ataqueAgua)
        
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click",ataqueTierra)

}

function ataqueFuego(){
    ataqueJugador="FUEGO🔥"
    ataqueAleatorioEnemigo()
}

function ataqueAgua(){
    ataqueJugador="AGUA💧"
    ataqueAleatorioEnemigo()
}

function ataqueTierra(){
    ataqueJugador="TIERRA🌱"
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)
    if(ataqueAleatorio  == 1){
        ataqueEnemigo = "FUEGO🔥"
    }else if(ataqueAleatorio  == 2){
        ataqueEnemigo = "AGUA💧"
    }else{
        ataqueEnemigo = "TIERRA🌱"
    }

    combate()
}

function combate(){
    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")

    if(ataqueJugador == ataqueEnemigo){
        resultado = "EMPATE 🤷‍♀️"
    }else if((ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") || (ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") || (ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA")){
        resultado = "GANASTE ✨"
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else {
        resultado = "PERDISTE ❌"
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    printMensaje()
    revisarVidas()
}

function revisarVidas(){

    if(vidasEnemigo == 0){
        resultadoFinal = "FELICITACIONES GANASTE 🎉✨"
        printMensajeFinal()
    }else if(vidasJugador == 0){
        resultadoFinal = "AWWW.. PERDISTE 😢"
        printMensajeFinal()
    }
}

function  deshabilitarBotones(){
    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.disabled = true
        
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.disabled = true
        
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.disabled = true

    habilitarSeccionReiniciar()
    
}

function habilitarSeccionReiniciar(){
    let seccionReiniciar = document.getElementById("reiniciar")
    seccionReiniciar.style.display = "block" 

    let botonReiniciar = document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener("click",reiniciarJuego)
}


function printMensaje(){
    let sectionMensajes = document.getElementById('resultado')
    let ataquesDelJugador = document.getElementById('ataques-del-jugador')
    let ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
    
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function printMensajeFinal(){
    let seccionMensaje = document.getElementById("resultado")

    seccionMensaje.innerHTML = resultadoFinal

    deshabilitarBotones()
}


function seleccionarMascotaJugador(){
    let jugar = 1
    let inputHipodoge = document.getElementById("hipodoge")
    let inputCapipepo = document.getElementById("capipepo")
    let inputRatigueya = document.getElementById("ratigueya")
    let spanMascotaJugador = document.getElementById("mascota-jugador")


    if(inputHipodoge.checked){
        spanMascotaJugador.innerHTML = "Hipodoge"
    }else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML = "Capipepo" 
    }else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML = "Ratigueya"
    }else{
        alert("selecciona una de las mascotas")
        jugar=0
    }

    if(jugar==1){
        seleccionarMascotaEnemigo()

        //Mostrar la sección seleccionar-ataque
        let seccionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
        seccionSeleccionarAtaque.style.display = "flex"

        //Mostrar la sección seleccionar-ataque
        let seccionSeleccionarMascota = document.getElementById("seleccionar-mascota")
        seccionSeleccionarMascota.style.display = "none"
    }
}

function seleccionarMascotaEnemigo(){
    let mascotaAleatoria = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")

    if(mascotaAleatoria==1){
        spanMascotaEnemigo.innerHTML="Hipodoge"
    }else if(mascotaAleatoria==2){
        spanMascotaEnemigo.innerHTML="Capipepo"
    }else {
        spanMascotaEnemigo.innerHTML="Ratigueya"
    }


}

function reiniciarJuego(){
    location.reload()
}

//Función que genera un número aleatorio en un rango.
function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}



window.addEventListener("load",iniciarJuego)