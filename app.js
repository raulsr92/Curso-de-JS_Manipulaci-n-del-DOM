let myName = "Raul Adolfo"

console.log(myName)

// Clase 4: Tarea N° 01: Capturar un elemento HTML en JavaScript a través de su ID

let tituloPrincipal = document.getElementById("app-title");

let titulo2 = document.querySelector("#app-title");

titulo2.innerHTML= "Bienvenidos a mi App"+" "+myName

// Clase 4: Tarea N° 02: Capturar un elemento HTML en JavaScript a través del nombre de Etiqueta HTML

let firstParrafo = document.querySelector("p");

console.log(firstParrafo)

// Clase 4: Tarea N° 03: Capturar una colección de elementos HTML en JavaScript a través de un nombre de clase en común

let menus = document.getElementsByClassName("menu-items");

console.log(menus)

// Clase 4: Tarea N° 04: Capturar una colección de elementos HTML en JavaScript a través de su Etiqueta HTML

let parrafos = document.getElementsByTagName("p")

console.log(parrafos)

// Clase 4: Tarea N° 05: Capturar una Lista de Nodos en JavaScript a través de un nombre de clase en común

let menusNodos = document.querySelectorAll(".menu-items");

console.log(menusNodos)

menusNodos.forEach((element)=>console.log(element))

