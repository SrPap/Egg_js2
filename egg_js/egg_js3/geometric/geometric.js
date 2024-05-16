// act1
// Definición de los objetos que representan los rectángulos
// const Rectangulo1 = {
//     altura: 10,
//     ancho: 5
// };

// const Rectangulo2 = {
//     altura: 7,
//     ancho: 3
// };

// const Rectangulo3 = {
//     altura: 12,
//     ancho: 4
// };

// // Función para calcular el perímetro de un rectángulo
// function perimetro(rectangulo) {
//     return 2 * (rectangulo.altura + rectangulo.ancho);
// }

// // Función para calcular el área de un rectángulo
// function area(rectangulo) {
//     return rectangulo.altura * rectangulo.ancho;
// }

// // Función para renderizar la tabla con los datos de los rectángulos
// function renderTablaRectangulos() {
//     const rectangulos = [Rectangulo1, Rectangulo2, Rectangulo3];
//     const tableBody = document.getElementById('rectanglesTableBody');

//     rectangulos.forEach((rectangulo, index) => {
//         const fila = document.createElement('tr');

//         fila.innerHTML = `
//             <td>Rectángulo ${index + 1}</td>
//             <td>${rectangulo.altura}</td>
//             <td>${rectangulo.ancho}</td>
//             <td>${perimetro(rectangulo)}</td>
//             <td>${area(rectangulo)}</td>
//         `;

//         tableBody.appendChild(fila);
//     });
// }

// // Llamar a la función para renderizar la tabla cuando la página haya cargado
// document.addEventListener('DOMContentLoaded', renderTablaRectangulos);


// act2

// const Rectangulo1 = {
//     altura: 10,
//     ancho: 5
// };

// const Rectangulo2 = {
//     altura: 7,
//     ancho: 3
// };

// const Rectangulo3 = {
//     altura: 12,
//     ancho: 4
// };


// import perimetro from './geometricPer.js';
// // function perimetro(rectangulo) {
// //     return 2 * (rectangulo.altura + rectangulo.ancho);
// // }


// import area from './geometricArea.js';
// // function area(rectangulo) {
// //     return rectangulo.altura * rectangulo.ancho;
// // }



// // Función para renderizar la tabla con los datos de los rectángulos
// function renderTablaRectangulos() {
//     const rectangulos = [Rectangulo1, Rectangulo2, Rectangulo3];
//     const tableBody = document.getElementById('rectanglesTableBody');

//     rectangulos.forEach((rectangulo, index) => {
//         const fila = document.createElement('tr');

//         fila.innerHTML = `
//             <td>Rectángulo ${index + 1}</td>
//             <td>${rectangulo.altura}</td>
//             <td>${rectangulo.ancho}</td>
//             <td>${perimetro(rectangulo)}</td>
//             <td>${area(rectangulo)}</td>
//         `;

//         tableBody.appendChild(fila);
//     });
// }

// document.addEventListener('DOMContentLoaded', renderTablaRectangulos);

// act3

// import Rectangulo1 from './geometricData.js';
// import Rectangulo2 from './geometricData.js';
// import Rectangulo3 from './geometricData.js';

import { Rectangulo1, Rectangulo2, Rectangulo3} from './geometricData.js';



import perimetro from './geometricPer.js';
// function perimetro(rectangulo) {
//     return 2 * (rectangulo.altura + rectangulo.ancho);
// }


import area from './geometricArea.js';
// function area(rectangulo) {
//     return rectangulo.altura * rectangulo.ancho;
// }



// Función para renderizar la tabla con los datos de los rectángulos
function renderTablaRectangulos() {
    const rectangulos = [Rectangulo1, Rectangulo2, Rectangulo3];
    const tableBody = document.getElementById('rectanglesTableBody');

    rectangulos.forEach((rectangulo, index) => {
        const fila = document.createElement('tr');

        fila.innerHTML = `
            <td>Rectángulo ${index + 1}</td>
            <td>${rectangulo.altura}</td>
            <td>${rectangulo.ancho}</td>
            <td>${perimetro(rectangulo)}</td>
            <td>${area(rectangulo)}</td>
        `;

        tableBody.appendChild(fila);
    });
}

document.addEventListener('DOMContentLoaded', renderTablaRectangulos);
