
// Clase N° 05: Acceder a un elemento HTML Padre

let elementULPadre = document.getElementById("parent");
console.log(elementULPadre)

// Acceder a todos sus hijos creando una coleccion HTML

const hijos = elementULPadre.children
console.log(hijos)
console.log(hijos[1])
console.log(hijos[1].textContent)


// Acceder a su primer hijo

const primerHijo = elementULPadre.firstElementChild
console.log(primerHijo)

// Acceder al hermano del primer hijo (Interface Element)

const primerHermano = primerHijo.nextElementSibling
console.log(primerHermano)

// Acceder al  último hijo

const ultimoHijo = elementULPadre.lastElementChild
console.log(ultimoHijo)


// Acceder al tercer hijo de cuatro

const tercerHijo = ultimoHijo.previousElementSibling
console.log(tercerHijo)


const previo = elementULPadre.previousElementSibling
console.log(previo)


// Tarea N° 02: Seleccionar elemento Hijo para desde ahí acceder a padres

let firstElementLI = document.querySelector("li")

console.log(firstElementLI)

// Acceder a su padre

//>> Forma 1
let parentOfLi = firstElementLI.parentElement

console.log(parentOfLi);

//>> Forma 2

let parentOfLi2 = firstElementLI.parentNode

console.log(parentOfLi2);

//>> Forma 3

let parentOfLi3 = firstElementLI.closest("#parent")

console.log(parentOfLi3);
