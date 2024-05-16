

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

// Obtener el contenedor del perfil desde el DOM
const perfilContainer = document.getElementById('perfil');

// Generar el contenido del perfil utilizando template strings
const contenidoPerfil = `
    <h2>Mi Perfil</h2>
    <p><strong>Nombre:</strong> ${misDatosFisicos.nombre}</p>
    <p><strong>Edad:</strong> ${misDatosFisicos.edad} años</p>
    <p><strong>Dirección:</strong> ${misDatosFisicos.direccion.calle} ${misDatosFisicos.direccion.numero}, ${misDatosFisicos.direccion.ciudad}</p>
    <p><strong>Altura:</strong> ${misDatosFisicos.altura} cm</p>
    <p><strong>Peso:</strong> ${misDatosFisicos.peso} kg</p>
    <p><strong>Hobby:</strong> ${misDatosFisicos.hobby}</p>
`;

// Mostrar el contenido del perfil en el contenedor
perfilContainer.innerHTML = contenidoPerfil;