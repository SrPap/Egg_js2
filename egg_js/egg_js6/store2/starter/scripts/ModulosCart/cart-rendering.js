// cart-rendering.js
import { resetLocalStorage, reloadPage } from './utils.js';

export function createCartCard(product) {
    return `
        <div class="cart-item" id="${product.id}">
            <a href="details.html?id=${product.id}"><img src="${product.image}" alt="${product.title}" class="cart-item-image" onclick="redirect()"></a>
            <div class="cart-item-details">
                <h3 class="cart-item-title">${product.title}</h3>
                <p class="cart-item-description">${product.description}</p>
                <p class="cart-item-price">Precio: $${product.price}</p>
                <input type="number" class="cart-item-quantity" value="${product.quantity}" placeholder="Cantidad">
                <button onclick="changeQuantity(event)" class="cart-act" type="button">COMPRAR</button>
            </div>
        </div>
    `;
}

export function printCartCards(products) {
    const cartContainer = document.querySelector('.cart-container');
    cartContainer.innerHTML = '';

    products.forEach(product => {
        const cartCard = createCartCard(product);
        cartContainer.innerHTML += cartCard;
    });
}

export function calculateTotal(products) {
    return products.reduce((total, product) => total + (product.price * product.quantity), 0);
}

export function createTotalTemplate(arrayOfProducts) {
    let total = calculateTotal(arrayOfProducts);

    return `
        <h4 class="total-title">Resumen del pedido</h4>
        <div class="Buy-cart">
          <p class="total-p">Total a pagar: $${total.toFixed(2)}</p>
          <p class="total-p">Incluye impuesto PAIS y percepcion AFIP.</p>
          <button onclick="resetLocalStorage()" id="buy" type="button">COMPRAR</button>
        </div>
    `;
}

export function printTotal(products) {
    const totalContainer = document.querySelector('.total-container');

    if (products.length > 0) {
        const totalTemplate = createTotalTemplate(products);
        totalContainer.innerHTML = totalTemplate;

        const buyButton = document.querySelector('#buy');
        if (buyButton) {
            buyButton.addEventListener('click', () => {
                Swal.fire({
                    title: '¡Comprado!',
                    text: 'Compra realizada. ¡Gracias por tu compra!',
                    icon: 'success',
                    confirmButtonText: 'Aceptar'
                }).then(() => {
                    resetLocalStorage();
                    reloadPage();
                });
            });
        }
    } else {
        totalContainer.innerHTML = '<h4 class="total-title">No hay productos en el carro</h4><div class="Buy-cart"><p class="total-p">Total a pagar: 0</p><button id="buy" type="button">COMPRAR</button></div>';
    }
}
