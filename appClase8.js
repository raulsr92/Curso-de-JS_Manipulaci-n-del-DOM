
// Clase 8: Modificando estilos desde JS

const titulo = document.querySelector("h1")

console.dir(titulo)

const menu = document.querySelector("menu")

// --- Accediendo a la propiedad "style"

let declaracionCSSH1 = titulo.style

console.log(declaracionCSSH1)

// Modificando el color del título

titulo.style.color =" #229954"

// Modificando el background del menú

menu.style.backgroundColor= "#a93226"

// Modificando el tamaño de fuente

menu.style.fontSize = "24px"

// Modificando estilos css mediante la asignación de una clase específica (esta tiene aplicada ciertos estilos)

menu.className = "main-menu"

// Clase 9: Uso de classList

/*Capturamos al menú */
const menucito = document.querySelector("menu")
console.log(menucito)

/*Capturamos al botón */

const toggleBotoncito = document.getElementById("toggle-btn")
console.log(toggleBotoncito)

/*Evento click */ 


toggleBotoncito.addEventListener("click",desaparecerElemento)

function desaparecerElemento() {
    
    menucito.classList.toggle("invisible");

    console.log(menucito.classList)
}