function sortProductsByName(products) {
    return products.sort((a, b) => a.title.localeCompare(b.title));
}

function filterProductsByName(products, searchTerm) {
    return products.filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase()));
}

function createProductCard(product) {
    // Crear el contenedor principal de la tarjeta de producto
    const card = document.createElement("a");
    card.classList.add("product-card");
    card.href = `./details.html?id=${product.id}`;

    // Crear la imagen del producto
    const image = document.createElement("img");
    image.classList.add("product-img");
    image.src = product.images[0];
    image.alt = product.title.toUpperCase();

    // Crear el contenedor de información del producto
    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    // Crear el título del producto
    const title = document.createElement("span");
    title.classList.add("product-title");
    title.textContent = product.title;

    // Crear la descripción del producto (colores)
    const description = document.createElement("span");
    description.classList.add("product-description");
    description.textContent = product.colors.join(", "); // Unir los colores en un string separado por comas

    // Crear el bloque de precio y descuento
    const priceBlock = document.createElement("div");
    priceBlock.classList.add("product-price-block");

    // Crear el precio del producto
    const price = document.createElement("span");
    price.classList.add("price");
    price.textContent = `$${product.price}`;

    // Crear el descuento (porcentaje)
    const discount = document.createElement("span");
    discount.classList.add("discount");
    discount.textContent = `${product.discount}% Off`;

    // Crear la política de impuestos del producto
    const taxPolicy = document.createElement("div");
    taxPolicy.classList.add("product-tax-policy");
    taxPolicy.textContent = "Incluye impuesto País y percepción AFIP";

    // Construir la estructura de la tarjeta de producto
    priceBlock.appendChild(price);
    priceBlock.appendChild(discount);
    productInfo.appendChild(title);
    productInfo.appendChild(description);
    productInfo.appendChild(priceBlock);
    productInfo.appendChild(taxPolicy);
    card.appendChild(image);
    card.appendChild(productInfo);

    return card;
}

function renderProductCards(productsToShow) {
    const productsContainer = document.querySelector("#products");
    productsContainer.innerHTML = ""; 
    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        productsContainer.appendChild(productCard);
    });
}


function captureText(event) {
    const searchText = event.target.value.toLowerCase();
    filteredProducts = filterProductsByName(products, searchText);
    renderProductCards(sortProductsByName(filteredProducts));
}


document.addEventListener("DOMContentLoaded", () => {
    renderProductCards(sortProductsByName(products));
    const searchSelector = document.querySelector("#search");
    searchSelector.addEventListener("input", captureText);
});










