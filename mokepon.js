const seccionReiniciar = document.getElementById("reiniciar")
const seccionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const botonMascotaJugador=document.getElementById("boton-mascota")

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
const contenedorAtaques = document.getElementById("contenedor-ataques")


let mokepones = []
let opcionDeMokepones
let ataqueJugador = []
let ataqueEnemigo = []
let mascotaJugador
let mascotaEnemigo
let resultado
let resultadoFinal

let inputHipodoge
let inputCapipepo
let inputRatigueya
let ataquesMokepon
let botonFuego
let botonAgua
let botonTierra
let botones = []
let ataquesMokeponEnemigo
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0




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
    let ataques
    for(let i = 0; i < mokepones.length; i++){
        if(mascotaJugador === mokepones[i].nombre){
            ataques = mokepones[i].ataques
        }
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques){
    ataques.forEach((ataque) => {
        ataquesMokepon = `<button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>`
        contenedorAtaques.innerHTML += ataquesMokepon
    })

    botonFuego = document.getElementById("boton-fuego")
    botonAgua = document.getElementById("boton-agua")
    botonTierra = document.getElementById("boton-tierra")
    
    botones = document.querySelectorAll(".BAtaque")

}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === '🔥') {
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
                boton.style.background = '#112f58' 
                boton.disabled = true  
            } else if (e.target.textContent === '💧') {
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true  
            } else {
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true  
            }
            ataqueAleatorioEnemigo()
        })
    })
}

function seleccionarMascotaEnemigo(){
    let mascotaAleatoria = aleatorio(0,mokepones.length - 1)

    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre
    mascotaEnemigo = mokepones[mascotaAleatoria].nombre
    ataquesMokeponEnemigo = mokepones[mascotaAleatoria].ataques

    mostrarMokeponesEnemigo(mascotaEnemigo)
    secuenciaAtaque()
}

function mostrarMokeponesEnemigo(MokeponSeleccionado){
    mokepones.forEach(mokepon=>{
        if(MokeponSeleccionado == mokepon.nombre){
            spanMascotaEnemigo.innerHTML=`<img src=${mokepon.foto} alt=${mokepon.nombre}></img>`
        }
    }) 
}

function mostrarMokeponesJugador(MokeponSeleccionado){
    mokepones.forEach(mokepon=>{
        if(MokeponSeleccionado == mokepon.nombre){
            spanMascotaJugador.innerHTML=`<img src=${mokepon.foto} alt=${mokepon.nombre}></img>`
        }
    }) 
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(0,ataquesMokeponEnemigo.length - 1)
    if(ataqueAleatorio  == 0 || ataqueAleatorio  == 1){
        ataqueEnemigo.push("FUEGO")
    }else if(ataqueAleatorio  == 2){
        ataqueEnemigo.push("AGUA")
    }else{
        ataqueEnemigo.push("TIERRA")
    }

    console.log(ataqueEnemigo)
    iniciarCombate()
}

function iniciarCombate(){
    if(ataqueJugador.length === 5){
        combate()
    }
}

function combate(){
    for(let i = 0; i < ataqueJugador.length; i++){
        if(ataqueJugador[i] === ataqueEnemigo[i]){
            indexAmbosOponentes(i,i)
            resultado = "EMPATE"
            printMensaje()
        }else if((ataqueJugador[i] == "AGUA" && ataqueEnemigo[i] == "FUEGO") || (ataqueJugador[i] == "FUEGO" && ataqueEnemigo[i] == "TIERRA") || (ataqueJugador[i] == "TIERRA" && ataqueEnemigo[i] == "AGUA")){
            indexAmbosOponentes(i,i)
            resultado = "GANASTE"
            printMensaje()
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        }else{
            indexAmbosOponentes(i,i)
            resultado = "PERDISTE"
            printMensaje()
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        }
    }

  /*  printMensaje()*/
    revisarVictorias()
}

function indexAmbosOponentes(jugador, enemigo){
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

//Función que genera un número aleatorio en un rango.
function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

function printMensaje(){
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    seccionMensaje.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function revisarVictorias(){
    if(victoriasJugador === victoriasEnemigo){
        resultadoFinal = "ES UN EMPATE"
        printMensajeFinal()
    }else if(victoriasJugador > victoriasEnemigo){
        resultadoFinal = "FELICITACIONES GANASTE 🎉✨"
        printMensajeFinal()
    }else{
        resultadoFinal = "AWWW.. PERDISTE 😢"
        printMensajeFinal()
    }
}

function printMensajeFinal(){
    seccionMensaje.innerHTML = resultadoFinal
    habilitarSeccionReiniciar()
}

/**
 * When the user clicks the button, the game restarts.
 */
function habilitarSeccionReiniciar(){
    seccionReiniciar.style.display = "block" 
    botonReiniciar.addEventListener("click",reiniciarJuego)
}

/**
 * The function is called 'reiniciarJuego' and it reloads the page.
 */
function reiniciarJuego(){
    location.reload()
}


window.addEventListener("load",iniciarJuego)