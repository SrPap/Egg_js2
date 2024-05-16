
function captureText(event) {
    const searchText = event.target.value.toLowerCase(); 

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchText)
    );

    renderProductCards(filteredProducts);
}

function renderProductCards(productsToShow) {
    const productsContainer = document.querySelector("#products");
    productsContainer.innerHTML = ""; 

    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        productsContainer.appendChild(productCard);
    });
}

function createProductCard(product) {
    const card = document.createElement("div");
    card.classList.add("product-card");
    

    const titleProduct = document.createElement("h3");
    titleProduct.textContent = product.title;

     const imgProduct = document.createElement("img");
    imgProduct.src = product.images[0];
    imgProduct.alt = product.title;
    imgProduct.style.width = "100px";
    imgProduct.style.height = "100px";

    const priceProduct = document.createElement("p");
    priceProduct.textContent = `Price: $${product.price}`;

    const stockProduct = document.createElement("p");
    stockProduct.textContent = `Stock: ${product.stock} units`;

    card.appendChild(titleProduct);
    card.appendChild(priceProduct);
    card.appendChild(stockProduct);
    card.appendChild(imgProduct);
    return card;
}


document.addEventListener("DOMContentLoaded", () => {
    renderProductCards(products); // Renderizar todas las tarjetas de productos al cargar la página
});

// Seleccionar el input de búsqueda y agregar el escuchador de eventos
const searchSelector = document.querySelector("#search");
searchSelector.addEventListener("keyup", captureText);
