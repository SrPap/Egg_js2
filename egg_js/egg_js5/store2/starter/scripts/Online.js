
// Función para cambiar el estado de la sesión
function toggleSession() {
    const isOnline = JSON.parse(localStorage.getItem('isOnline')) || false;
    const userIcon = document.getElementById('userIcon');
    const cartIcon = document.getElementById('cartIcon');
    const profileIcon = document.getElementById('profileIcon');

    if (isOnline) {
        // Si la sesión está iniciada, cerrar sesión
        localStorage.setItem('isOnline', JSON.stringify(false));
        userIcon.style.display = 'inline'; // Mostrar ícono de usuario
        cartIcon.style.display = 'none'; // Ocultar ícono de carrito
        profileIcon.style.display = 'none'; // Ocultar ícono de perfil
    } else {
        // Si la sesión está cerrada, iniciar sesión
        localStorage.setItem('isOnline', JSON.stringify(true));
        userIcon.style.display = 'none'; // Ocultar ícono de usuario
        cartIcon.style.display = 'inline'; // Mostrar ícono de carrito
        profileIcon.style.display = 'inline'; // Mostrar ícono de perfil
    }
}

// Función para cerrar sesión
function endSession() {
    localStorage.setItem('isOnline', JSON.stringify(false));
    const userIcon = document.getElementById('userIcon');
    const cartIcon = document.getElementById('cartIcon');
    const profileIcon = document.getElementById('profileIcon');

    userIcon.style.display = 'inline'; // Mostrar ícono de usuario
    cartIcon.style.display = 'none'; // Ocultar ícono de carrito
    profileIcon.style.display = 'none'; // Ocultar ícono de perfil
}

// Función para inicializar la barra de navegación según el estado de la sesión
function initializeNavigation() {
    const isOnline = JSON.parse(localStorage.getItem('isOnline')) || false;
    const userIcon = document.getElementById('userIcon');
    const cartIcon = document.getElementById('cartIcon');
    const profileIcon = document.getElementById('profileIcon');

    if (isOnline) {
        // Si la sesión está iniciada, mostrar íconos de carrito y perfil
        userIcon.style.display = 'none';
        cartIcon.style.display = 'inline';
        profileIcon.style.display = 'inline';
    } else {
        // Si la sesión está cerrada, mostrar ícono de usuario
        userIcon.style.display = 'inline';
        cartIcon.style.display = 'none';
        profileIcon.style.display = 'none';
    }
}

// Llamar a la función de inicialización al cargar la página
initializeNavigation();
