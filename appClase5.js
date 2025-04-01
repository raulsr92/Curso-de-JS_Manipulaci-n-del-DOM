
// Clase N° 05: Acceder a un elemento HTML Padre

let elementULPadre = document.getElementById("parent");

console.log(elementULPadre)

// Acceder a todos sus hijos creando una coleccion HTML

const hijos = elementULPadre.children

console.log(hijos)

console.log(hijos[1])

console.log(hijos[1].textContent)


/*
// Acceder a su primer hijo

const primerHijo = elementULPadre.firstElementChild

console.log(primerHijo)

*/