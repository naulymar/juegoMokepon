const seccionReiniciar = document.getElementById("reiniciar")
const seccionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const botonMascotaJugador=document.getElementById("boton-mascota")
const botonFuego = document.getElementById("boton-fuego")
const botonAgua = document.getElementById("boton-agua")
const botonTierra = document.getElementById("boton-tierra")


const seccionSeleccionarMascota = document.getElementById("seleccionar-mascota")
const seccionMensaje = document.getElementById("resultado")

const spanMascotaJugador = document.getElementById("mascota-jugador")
const spanMascotaEnemigo = document.getElementById("mascota-enemigo")
const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")

const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const botonReiniciar = document.getElementById("boton-reiniciar")
const contenedorTarjetas = document.getElementById("contenedor-tarjetas")

const mascotaEnemigoSeleccionada = document.getElementById("mascota-enemigo")
const mascotaJugadorSeleccionada = document.getElementById("mascota-jugador")


let mokepones = []
let opcionDeMokepones
let ataqueJugador
let mascotaJugador
let mascotaEnemigo
let ataqueEnemigo
let resultado
let resultadoFinal
let vidasJugador = 3
let vidasEnemigo = 3
let inputHipodoge
let inputCapipepo
let inputRatigueya


class Mokepon{
    constructor(nombre,foto,vidas){
        this.nombre = nombre
        this.foto = foto
        this.vidas = vidas
        this.ataques = []
    }
}

let hipodoge = new Mokepon('Hipodoge','./img/mokepons_mokepon_hipodoge_attack.png',5)

let capipepo = new Mokepon('Capipepo','./img/mokepons_mokepon_capipepo_attack.png',5)

let ratigueya = new Mokepon('Ratigueya','./img/mokepons_mokepon_ratigueya_attack.png',5)

hipodoge.ataques.push(
    {nombre: '💧', id:'boton-agua'},
    {nombre: '💧', id:'boton-agua'},
    {nombre: '💧', id:'boton-agua'},
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '🌱', id:'boton-tierra'},
)

capipepo.ataques.push(
    {nombre: '🌱', id:'boton-tierra'},
    {nombre: '🌱', id:'boton-tierra'},
    {nombre: '🌱', id:'boton-tierra'},
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '💧', id:'boton-agua'},
)

ratigueya.ataques.push(
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '💧', id:'boton-agua'},
    {nombre: '🌱', id:'boton-tierra'},
)

mokepones.push(hipodoge,capipepo,ratigueya)

function iniciarJuego(){

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `<input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre} >
        </label>`

        contenedorTarjetas.innerHTML += opcionDeMokepones
        inputHipodoge = document.getElementById("Hipodoge")
        inputCapipepo = document.getElementById("Capipepo")
        inputRatigueya = document.getElementById("Ratigueya")
    })

    seccionReiniciar.style.display = "none"
    seccionSeleccionarAtaque.style.display = "none"

    botonMascotaJugador.addEventListener("click",seleccionarMascotaJugador)

    botonFuego.addEventListener("click",ataqueFuego)
    botonAgua.addEventListener("click",ataqueAgua)
    botonTierra.addEventListener("click",ataqueTierra)
}


/**
 * If the player selects a pet, then the enemy pet is selected and the attack section is displayed.
 */
function seleccionarMascotaJugador(){
    let jugar = 1
    
    if(inputHipodoge.checked){
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
    }else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
    }else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    }else{
        alert("selecciona una de las mascotas")
        jugar=0
    }
    
    //Mostrar mokepon una vez seleccionado
    mostrarMokeponesJugador(mascotaJugador)
    extraerAtaques(mascotaJugador)
    
    if(jugar==1){
        seleccionarMascotaEnemigo()
        //Mostrar la sección seleccionar-ataque
        seccionSeleccionarAtaque.style.display = "flex"

        //Mostrar la sección seleccionar-ataque 
        seccionSeleccionarMascota.style.display = "none"
    }
}

function extraerAtaques(mascotaJugador){
    let ataque
    for(let i = 0; i < mokepones.length; i++){
        if(mascotaJugador === mokepones[i].nombre){
            ataque = mokepones[i].ataques
        }
    }
    mostrarAtaques()
}

function mostrarAtaques(){
    
}

function seleccionarMascotaEnemigo(){
    let mascotaAleatoria = aleatorio(0,mokepones.length - 1)

    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre
    mascotaEnemigo = mokepones[mascotaAleatoria].nombre

    mostrarMokeponesEnemigo(mascotaEnemigo)
}

function mostrarMokeponesEnemigo(MokeponSeleccionado){
    mokepones.forEach(mokepon=>{
        if(MokeponSeleccionado==mokepon.nombre){
            spanMascotaEnemigo.innerHTML=`<img src=${mokepon.foto} alt=${mokepon.nombre}></img>`
        }
    }) 
}

function mostrarMokeponesJugador(MokeponSeleccionado){
    mokepones.forEach(mokepon=>{
        if(MokeponSeleccionado==mokepon.nombre){
            spanMascotaJugador.innerHTML=`<img src=${mokepon.foto} alt=${mokepon.nombre}></img>`
        }
    }) 
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

//Función que genera un número aleatorio en un rango.
function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
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

function revisarVidas(){
    if(vidasEnemigo == 0){
        resultadoFinal = "FELICITACIONES GANASTE 🎉✨"
        printMensajeFinal()
    }else if(vidasJugador == 0){
        resultadoFinal = "AWWW.. PERDISTE 😢"
        printMensajeFinal()
    }
}

function printMensajeFinal(){
    seccionMensaje.innerHTML = resultadoFinal
    deshabilitarBotones()
}

function  deshabilitarBotones(){
    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true

    habilitarSeccionReiniciar()
}

function habilitarSeccionReiniciar(){
    seccionReiniciar.style.display = "block" 
    botonReiniciar.addEventListener("click",reiniciarJuego)
}

function reiniciarJuego(){
    location.reload()
}


window.addEventListener("load",iniciarJuego)