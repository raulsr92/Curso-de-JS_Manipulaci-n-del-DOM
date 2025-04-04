
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
