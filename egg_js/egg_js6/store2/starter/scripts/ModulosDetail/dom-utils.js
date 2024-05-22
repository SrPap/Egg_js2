// dom-utils.js
import { products } from './products.js';

export function printDetails(id) {
    const product = products.find((each) => each.id === id);

    if (!product) {
        console.error(`No se encontró ningún producto con el ID ${id}`);
        return;
    }

    const colorOptions = product.colors.map(
        (color) => `<option value="${color}">${color}</option>`
    ).join("");

    const imageThumbnails = product.images.map(
        (image) => `<img class="miniImg" src="${image}" alt="mini" onclick="changeMini(event)" />`
    ).join("");

    const detailsTemplate = `
        <section class="product-images-block">
            <div class="product-miniImages-block">
                ${imageThumbnails}
            </div>
            <img src="${product.images[0]}" alt="${product.title}" class="product-img" id="bigImg">
        </section>

        <div class="product-description-block">
            <h1 class="product-title">${product.title}</h1>
            <form class="product-selector">
                <fieldset class="product-fieldset">
                    <p class="product-label" for="color">Color</p>
                    <select class="product-select" id="colorSelect" name="colorSelect">
                        ${colorOptions}
                    </select>
                </fieldset>
            </form>
            <div class="product-description">
                <span class="product-label">Descripción</span>
                <p>${product.description}</p>
            </div>
        </div>

        <div class="product-checkout-block">
            <div class="checkout-container">
                <span class="checkout-total-label">Total:</span>
                <h2 id="price" class="checkout-total-price">$${product.price}</h2>
                <p class="checkout-description">Incluye impuesto País y percepción AFIP</p>
                <ul class="checkout-policy-list">
                    <li>
                        <span class="policy-icon"><img src="./assets/truck.png" alt="Truck"/></span>
                        <span class="policy-desc">Agrega el producto al carrito para conocer los costos de envío</span>
                    </li>
                    <li>
                        <span class="policy-icon"><img src="./assets/plane.png" alt="Plane"/></span>
                        <span class="policy-desc">Recibí aproximadamente entre 10 y 15 días hábiles, seleccionando envío normal.</span>
                    </li>
                </ul>
                <div class="checkout-process">
                    <div class="top">
                        <input id="quantity" type="number" min="1" value="1" onkeyup="changePrice(event)" />
                        <button onclick="saveProduct(${id})" type="button" class="cart-btn">Añadir al Carrito</button>
                    </div>
                    <button onclick="saveProductfav(${id})" type="button" class="cart-btn">Añadir a favoritos</button>
                </div>
            </div>
        </div>
    `;

    document.querySelector("#details").innerHTML = detailsTemplate;
}

export function changePrice(event) {
    const quantity = parseInt(event.target.value);
    const productId = getProductIdFromUrl();
    const product = products.find((each) => each.id === productId);

    if (product) {
        let subtotal = product.price * quantity;
        document.querySelector("#price").textContent = `$ ${subtotal}`;
    }
}

export function changeMini(event) {
    const selectedSrc = event.target.src;
    const bigImage = document.querySelector("#bigImg");
    bigImage.src = selectedSrc;
}

function getProductIdFromUrl() {
    const params = new URLSearchParams(location.search);
    return parseInt(params.get('id'));
}
