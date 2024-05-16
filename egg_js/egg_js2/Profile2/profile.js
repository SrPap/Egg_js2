
const nombreElement = document.getElementById('nombre');
const edadElement = document.getElementById('edad');
const correoElement = document.getElementById('correo');
const alturaElement = document.getElementById('altura');
const pesoElement = document.getElementById('peso');


const misDatosFisicos = {
    nombre: "Juan",
    edad: prompt("Cual es tu edad?"),
    correo: "juanito@egg.com",
    altura: 175,
    peso: 70,
};

const { nombre, edad, correo, altura, peso } = misDatosFisicos;


function imprimirTemplate1() {
   
    nombreElement.textContent += `${nombre}`;
    edadElement.textContent += `${edad}`;
    correoElement.textContent += `${correo}`;
    alturaElement.textContent += `${altura} cm`;
    pesoElement.textContent += `${peso} kg`;

}

function imprimirTemplate2() {
   
    nombreElement.textContent += `${nombre}`;
    edadElement.textContent += `${edad} Es mayor de edad`;
    correoElement.textContent += `${correo}`;
    alturaElement.textContent += `${altura} cm`;
    pesoElement.textContent += `${peso} kg`;

}

if (edad) {
          if (edad >= 18) {
            imprimirTemplate2();
          } else {
            imprimirTemplate1();
          }
};

