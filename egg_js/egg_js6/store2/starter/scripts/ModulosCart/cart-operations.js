// cart-operations.js
import { reloadPage } from './utils.js';
import { printCartCards } from './cart-rendering.js';

let cartProducts = JSON.parse(localStorage.getItem('cart')) || [];

if (!Array.isArray(cartProducts)) {
    cartProducts = [];
}

export function changeQuantity(event) {
    const button = event.currentTarget;
    const parentElement = button.parentElement;
    const quantityInput = parentElement.querySelector('.cart-item-quantity');
    const newQuantity = parseInt(quantityInput.value);
    const productId = parseInt(button.closest('.cart-item').id);

    const productIndex = cartProducts.findIndex(product => product.id === productId);

    if (productIndex !== -1) {
        cartProducts[productIndex].quantity = newQuantity;
        localStorage.setItem('cart', JSON.stringify(cartProducts));
        printCartCards(cartProducts);
    }
     Swal.fire({
                    title: '¡Cambiado!',
                    text: 'Se a actualizado la cantidad de productos.',
                    icon: 'success',
                    confirmButtonText: 'Aceptar'
                }).then(() => {
                    reloadPage();
                });
}

export function getCartProducts() {
    return cartProducts;
}
