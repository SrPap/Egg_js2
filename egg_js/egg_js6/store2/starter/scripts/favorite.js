
function reloadPage() {
    location.reload(); // Recargar la página
}

function resetLocalStorage() {
    localStorage.clear(); // Limpiar todos los datos almacenados en localStorage
    reloadPage();
  }


// Obtener productos del localStorage
let cartProducts = JSON.parse(localStorage.getItem('fav')) || [];

  // Verificar si hay productos en el carrito y son válidos
if (!Array.isArray(cartProducts)) {
    cartProducts = []; // Reiniciar a un array vacío si no es un array válido
}


function createCartCard(product) {
    return `
        <div class="fav-item" id="${product.id}">
            <a href="details.html?id=${product.id}"><img src="${product.image}" alt="${product.title}" class="fav-item-image" onclick="redirect()"></a>
            <div class="cart-item-details">
                <h3 class="cart-item-title">${product.title}</h3>
                <p class="cart-item-description">${product.description}</p>
                <p class="cart-item-price">Precio:  $${product.price}</p>
                <p class="cart-item-price">Stock disponible:  ${product.stock}</p>
                   <div class="div-bottom-fav">
                     <button onclick="eliminateFavorite(event)" class="bottom-fav" type="button">Eliminar favorito</button>
                   </div>
            </div>
        </div>
    `;
}

function printCartCards(products) {
    const cartContainer = document.querySelector('.favorite-container');
    cartContainer.innerHTML = ''; // Limpiar el contenido actual del contenedor

    // Generar y agregar tarjetas de productos al contenedor
    products.forEach(product => {
        const cartCard = createCartCard(product);
        cartContainer.innerHTML += cartCard;
    });
}

// Renderizar las tarjetas de productos en el carrito
printCartCards(cartProducts);

// boton de eliminar favoritos

function eliminateFavorite(event) {
    const button = event.currentTarget; // Obtener el botón que desencadenó el evento
    const productId = parseInt(button.closest('.fav-item').id); // Obtener el ID del producto

    let cartProducts = JSON.parse(localStorage.getItem('fav')) || [];

    // Encuentra el índice del producto que deseas eliminar
    const indexToRemove = cartProducts.findIndex(product => product.id === productId);

    // Verifica si se encontró el producto
    if (indexToRemove !== -1) {
        // Elimina el producto del array
        cartProducts.splice(indexToRemove, 1);

        // Actualiza el localStorage con el nuevo array modificado
        localStorage.setItem('fav', JSON.stringify(cartProducts));

        console.log(`Producto con ID ${productId} eliminado del localStorage.`);
    } else {
        console.log(`No se encontró ningún producto con el ID ${productId} en el localStorage.`);
    }
    reloadPage();
}



function removeProductFromLocalStorage(productId) {
    
}

// Ejemplo de uso: supongamos que deseas eliminar el producto con ID 2 del localStorage
const productIdToRemove = 2;
removeProductFromLocalStorage(productIdToRemove);

const hola = "hola";
const Hola = '2';
const ola = "oal";
const olla = "s";

let ero = [hola, Hola, ola, olla]

console.log(ero[2])




const btn = document.querySelector(".button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}


btn.addEventListener("click", () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol; 
});

btn.addEventListener("click", () => {True});
