// main.js
import { printDetails, changeMini, changePrice } from './dom-utils.js';
import { saveProduct, saveProductfav } from './cart-utils.js';

window.changeMini = changeMini;
window.changePrice = changePrice;
window.saveProduct = saveProduct;
window.saveProductfav = saveProductfav;

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(location.search);
    const id = parseInt(params.get('id'));
    printDetails(id);
});
