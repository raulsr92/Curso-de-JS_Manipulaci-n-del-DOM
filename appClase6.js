
// Capturar elmento input

let inputElement = document.getElementById("input-id")

console.log(inputElement)

// ver propiedades de elemento input

console.dir(inputElement);

// acceder a propiedad "value" del input

let valorInput = inputElement.value

console.log(valorInput)

valorInput = inputElement.value = "Raul Sanchez"

console.log(valorInput)

// Clase 7: 

let tituloProject = document.getElementById("app-title");

console.log(tituloProject)
console.dir(tituloProject)


//--Cambiar título de forma dinámica

tituloProject.textContent = "Soy el nuevo título m+as dinámico"

tituloProject.innerText =  "Otra vez cambié el título. Sigo dinámico"