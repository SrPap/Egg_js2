
function reloadPage() {
    location.reload(); // Recargar la página
}

function resetLocalStorage() {
    localStorage.clear(); // Limpiar todos los datos almacenados en localStorage
    reloadPage();
  }

function redirect () {
  ;
}

// Primera parte
// Obtener productos del localStorage
let cartProducts = JSON.parse(localStorage.getItem('cart')) || [];

// Verificar si hay productos en el carrito y son válidos
if (!Array.isArray(cartProducts)) {
    cartProducts = []; // Reiniciar a un array vacío si no es un array válido
}


function createCartCard(product) {
    return `
        <div class="cart-item" id="${product.id}">
            <a href="details.html?id=${product.id}"><img src="${product.image}" alt="${product.title}" class="cart-item-image" onclick="redirect()"></a>
            <div class="cart-item-details">
                <h3 class="cart-item-title">${product.title}</h3>
                <p class="cart-item-description">${product.description}</p>
                <p class="cart-item-price">Precio:  $${product.price}</p>
                <input  type="number" class="cart-item-quantity" value="${product.quantity}" placeholder="Cantidad">
                
                   <button onclick="changeQuantity(event)" class="cart-act" type="button">COMPRAR</button>
                
            </div>
        </div>
    `;
}

function printCartCards(products) {
    const cartContainer = document.querySelector('.cart-container');
    cartContainer.innerHTML = ''; // Limpiar el contenido actual del contenedor

    // Generar y agregar tarjetas de productos al contenedor
    products.forEach(product => {
        const cartCard = createCartCard(product);
        cartContainer.innerHTML += cartCard;
    });
}

// Renderizar las tarjetas de productos en el carrito
printCartCards(cartProducts);


// Segunda parte

// Definir función para generar el template del cuadro de detalle del total
function createTotalTemplate(arrayOfProducts) {
    let total = 0;

    // Calcular el subtotal sumando el precio * cantidad de cada producto
    arrayOfProducts.forEach(product => {
        total += product.price * product.quantity;
    });

    // Generar el template con el subtotal y el botón de compra
    return `
        <h4 class="total-title">Resumen del pedido</h4>
        <div class="Buy-cart">
          <p class="total-p">Total a pagar: $${total.toFixed(2)}</p>
          <p class="total-p">Incluye impuesto PAIS y percepcion AFIP.</p>
          <button onclick="resetLocalStorage()" id="buy" type="button">COMPRAR</button>
        </div>
    `;
}

// Definir función para imprimir el cuadro de detalle del total en la vista
function printTotal(products) {
    const totalContainer = document.querySelector('.total-container');

    // Verificar si hay productos para calcular el total
    if (products.length > 0) {
        const totalTemplate = createTotalTemplate(products);
        totalContainer.innerHTML = totalTemplate;

        // Agregar evento al botón de compra (puedes implementar la lógica de compra aquí)
        const buyButton = document.querySelector('#buy');
        if (buyButton) {
            buyButton.addEventListener('click', () => {
                // Lógica para realizar la compra
                alert('Compra realizada. ¡Gracias por tu compra!');
                // Aquí puedes añadir la lógica adicional después de la compra
            });
        }
    } else {
        // Si no hay productos, mostrar un mensaje o manejar el caso según tu necesidad
        totalContainer.innerHTML = '<h4 class="total-title">No hay productos en el carro</h4><div class="Buy-cart"><p class="total-p">Total a pagar: 0</p><button onclick="resetLocalStorage()" id="buy" type="button">COMPRAR</button></div>';
    }
}

// Ejemplo de uso:
// Suponiendo que 'cartProducts' es un array de productos del carrito obtenido del localStorage
printTotal(cartProducts);



// Clase 02/05/2024

// Función para cambiar la cantidad de un producto en el carrito
function changeQuantity(event) {
    const button = event.currentTarget; // Obtener el botón que desencadenó el evento
    const parentElement = button.parentElement;
    const quantityInput = parentElement.querySelector('.cart-item-quantity'); // Obtener el input de cantidad
    const newQuantity = parseInt(quantityInput.value); // Obtener el nuevo valor de cantidad
   console.log(newQuantity);
    const productId = parseInt(button.closest('.cart-item').id); // Obtener el ID del producto
    console.log(productId);


    // Buscar el producto en cartProducts por su ID
    const productIndex = cartProducts.findIndex(product => product.id === productId);
    console.log(productIndex);

    if (productIndex !== -1) {
        // Si se encuentra el producto, actualizar su cantidad
        cartProducts[productIndex].quantity = newQuantity;
        console.log(newQuantity);
        // Actualizar cartProducts en localStorage con los productos actualizados
        localStorage.setItem('cart', JSON.stringify(cartProducts));

        // Volver a renderizar las tarjetas del carrito con los productos actualizados
        printCartCards(cartProducts);
    }
    reloadPage();
}
