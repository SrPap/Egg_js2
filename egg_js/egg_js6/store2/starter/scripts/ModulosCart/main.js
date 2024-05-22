// main.js
import { getCartProducts, changeQuantity } from './cart-operations.js';
import { printCartCards, printTotal } from './cart-rendering.js';

const cartProducts = getCartProducts();

document.addEventListener('DOMContentLoaded', () => {
    printCartCards(cartProducts);
    printTotal(cartProducts);
});

window.changeQuantity = changeQuantity;
