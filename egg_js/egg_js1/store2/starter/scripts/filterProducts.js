
// act1

// function captureText() {
//     console.log("capturado");
// };

// const searchSelector = document.querySelector("#search")

// searchSelector.addEventListener("keyup", captureText);

// act2
// const searchSelector = document.querySelector("#search");

// searchSelector.addEventListener("keyup", event => {
//     captureText(event);
// });

// function captureText(event) {
//     console.log("Tecla presionada:", event.key);
//     console.log("Código de tecla:", event.keyCode);
//     console.log("Texto actual en el campo de búsqueda:", event.target.value);
//     console.log("Tipo de evento:", event.type);

// }

// act3
// function captureText(event) {
//     const searchText = event.target.value.toLowerCase(); // Obtener el texto capturado y convertirlo a minúsculas

//     // Filtrar los productos cuyo título incluye el texto capturado
//     const filteredProducts = products.filter(product =>
//         product.title.toLowerCase().includes(searchText)
//     );

//     // Actualizar la vista con las tarjetas de los productos filtrados
//     renderProductCards(filteredProducts);
// }

// // Función para renderizar las tarjetas de productos en la vista
// function renderProductCards(productsToShow) {
//     const productsContainer = document.querySelector("#products");
//     productsContainer.innerHTML = ""; // Limpiar el contenedor de productos antes de renderizar

//     productsToShow.forEach(product => {
//         const productCard = createProductCard(product);
//         productsContainer.appendChild(productCard);
//     });
// }

// // Función para crear una tarjeta de producto HTML
// function createProductCard(product) {
//     const card = document.createElement("div");
//     card.classList.add("product-card");
    

//     const titleProduct = document.createElement("h3");
//     titleProduct.textContent = product.title;

//      const imgProduct = document.createElement("img");
//     imgProduct.src = product.images[0];
//     imgProduct.alt = product.title;
//     imgProduct.style.width = "100px";
//     imgProduct.style.height = "100px";

//     const priceProduct = document.createElement("p");
//     priceProduct.textContent = `Price: $${product.price}`;

//     const stockProduct = document.createElement("p");
//     stockProduct.textContent = `Stock: ${product.stock} units`;

//     card.appendChild(titleProduct);
//     card.appendChild(priceProduct);
//     card.appendChild(stockProduct);
//     card.appendChild(imgProduct);
//     return card;
// }

// document.addEventListener("DOMContentLoaded", () => {
//     renderProductCards(products); // Renderizar todas las tarjetas de productos al cargar la página
// });

// // Seleccionar el input de búsqueda y agregar el escuchador de eventos
// const searchSelector = document.querySelector("#search");
// searchSelector.addEventListener("keyup", captureText);


// act13/05/24



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
