
export function renderProductCards(productsToShow, productsContainer) {
    productsContainer.innerHTML = '';
    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        productsContainer.appendChild(productCard);
    });
}

function createProductCard(product) {
    const card = document.createElement("a");
    card.className = "product-card";
    card.href = `./details.html?id=${product.id}`;

    const image = document.createElement("img");
    image.className = "product-img";
    image.src = product.images[0];
    image.alt = product.title.toUpperCase();

    const productInfo = document.createElement("div");
    productInfo.className = "product-info";

    const title = document.createElement("span");
    title.className = "product-title";
    title.textContent = product.title;

    const description = document.createElement("span");
    description.className = "product-description";
    description.textContent = product.colors.join(", ");

    const priceBlock = document.createElement("div");
    priceBlock.className = "product-price-block";

    const price = document.createElement("span");
    price.className = "price";
    price.textContent = `$${product.price}`;

    const discount = document.createElement("span");
    discount.className = "discount";
    discount.textContent = `${product.discount}% Off`;

    const taxPolicy = document.createElement("div");
    taxPolicy.className = "product-tax-policy";
    taxPolicy.textContent = "Incluye impuesto País y percepción AFIP";

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
