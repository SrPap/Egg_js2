// act1
// const nombre = prompt("Inserte su nombre aqui");
// const edad =prompt("Inserte su edad aqui");
// const pasatiempo = prompt("Inserte su pasatiempo aqui");
// const profesion = prompt("Inserte su profesión aqui");
// const ubicacion = prompt("Inserte su ubicación aqui");

// function TemplateString () {
// // Crear un template string para redactar un texto con los datos personales
// const textoDatosPersonales = `
//     Hola, mi nombre es ${nombre}.
//     Tengo ${edad} años y soy ${profesion}.
//     Actualmente vivo en ${ubicacion}.
//     En mi tiempo libre, disfruto ${pasatiempo}.
// `;

// // Imprimir el texto de datos personales en la vista principal de la página
// const divDatosPersonales = document.querySelector('.text');
// divDatosPersonales.textContent = textoDatosPersonales;
// }

// TemplateString ()

// // act2
// let isOnline = false;
// let entrada = prompt('Estas conectado? Escribe "SI" o "NO"')
// let respuesta = entrada ?? "No hay valor";
// if (respuesta.toUpperCase() == "SI" || respuesta.toUpperCase() == "NO") {
//     if (respuesta.toUpperCase() == "SI" && isOnline === false) {
//         isOnline = true;
//         if (isOnline) {
//             let hobby = "programar", nombre = "Jeronimo", ubicacion = "Bogota";
//             alert("Usuario conectado");
//             console.log(`Hola ${nombre} como esta el clima hoy en ${ubicacion}, espero estes disfrutando de ${hobby} el dia de hoy`);
//         } else {
//             alert("El usuario no esta conectado")
//         }
//     } else {
//         alert("has decidido no conectarte")
//     }
// }else{
//     alert(`${respuesta}`);
// }

const misDatosFisicos = {
    nombre: "Juan",
    edad: 25,
    direccion: {
        calle: "Calle Ejemplo",
        numero: "123",
        ciudad: "Ciudad Ejemplo"
    },
    altura: 175,
    peso: 70,
    hobby: "Pintar"
};

// Función para imprimir el template en una etiqueta <pre> específica
function imprimirTemplate(id = 'pre3') {
    // Obtener el elemento <pre> con el id proporcionado (o utilizar el predeterminado)
    const preElement = document.getElementById(id) || document.getElementById('pre3');

    // Generar el contenido del perfil utilizando template strings
    const contenidoPerfil = `
        Nombre: ${misDatosFisicos.nombre}
        Edad: ${misDatosFisicos.edad} años
        Dirección: ${misDatosFisicos.direccion.calle} ${misDatosFisicos.direccion.numero}, ${misDatosFisicos.direccion.ciudad}
        Altura: ${misDatosFisicos.altura} cm
        Peso: ${misDatosFisicos.peso} kg
        Hobby: ${misDatosFisicos.hobby}
    `;

    // Asignar el contenido generado a innerText del elemento <pre>
    preElement.innerText = contenidoPerfil;
}

// Llamar a la función imprimirTemplate para mostrar el perfil en la tercera etiqueta <pre>
imprimirTemplate();