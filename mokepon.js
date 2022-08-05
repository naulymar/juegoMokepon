let seccionReiniciar = document.getElementById("reiniciar")
let seccionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
let botonMascotaJugador=document.getElementById("boton-mascota")
let botonFuego = document.getElementById("boton-fuego")
let botonAgua = document.getElementById("boton-agua")
let botonTierra = document.getElementById("boton-tierra")

let inputHipodoge = document.getElementById("hipodoge")
let inputCapipepo = document.getElementById("capipepo")
let inputRatigueya = document.getElementById("ratigueya")
let spanMascotaJugador = document.getElementById("mascota-jugador")
let seccionSeleccionarMascota = document.getElementById("seleccionar-mascota")

let spanMascotaEnemigo = document.getElementById("mascota-enemigo")
let spanVidasJugador = document.getElementById("vidas-jugador")
let spanVidasEnemigo = document.getElementById("vidas-enemigo")
let ataquesDelJugador = document.getElementById('ataques-del-jugador')
let ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
let seccionMensaje = document.getElementById("resultado")

let ataqueJugador
let ataqueEnemigo
let resultado
let resultadoFinal
let vidasJugador = 3
let vidasEnemigo = 3



function iniciarJuego(){
    seccionReiniciar.style.display = "none"

    seccionSeleccionarAtaque.style.display = "none"

    botonMascotaJugador.addEventListener("click",seleccionarMascotaJugador)

    botonFuego.addEventListener("click",ataqueFuego)
    botonAgua.addEventListener("click",ataqueAgua)
    botonTierra.addEventListener("click",ataqueTierra)
}


function seleccionarMascotaJugador(){
    let jugar = 1
    
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
        seccionSeleccionarAtaque.style.display = "flex"

        //Mostrar la sección seleccionar-ataque 
        seccionSeleccionarMascota.style.display = "none"
    }
}

function seleccionarMascotaEnemigo(){
    let mascotaAleatoria = aleatorio(1,3)

    if(mascotaAleatoria==1){
        spanMascotaEnemigo.innerHTML="Hipodoge"
    }else if(mascotaAleatoria==2){
        spanMascotaEnemigo.innerHTML="Capipepo"
    }else {
        spanMascotaEnemigo.innerHTML="Ratigueya"
    }
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
    if(ataqueJugador == ataqueEnemigo){
        resultado = "EMPATE 🤷‍♀️"
    }else if((ataqueJugador == "AGUA💧" && ataqueEnemigo == "FUEGO🔥") || (ataqueJugador == "FUEGO🔥" && ataqueEnemigo == "TIERRA🌱") || (ataqueJugador == "TIERRA🌱" && ataqueEnemigo == "AGUA💧")){
        resultado = "GANASTE ✨"
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else{
        resultado = "PERDISTE ❌"
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    printMensaje()
    revisarVidas()
}

function printMensaje(){
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    seccionMensaje.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function printMensajeFinal(){
    seccionMensaje.innerHTML = resultadoFinal

    deshabilitarBotones()
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

function reiniciarJuego(){
    location.reload()
}

//Función que genera un número aleatorio en un rango.
function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}



window.addEventListener("load",iniciarJuego)