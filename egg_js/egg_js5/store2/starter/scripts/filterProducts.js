// act1




// document.addEventListener('DOMContentLoaded', () => {
//     fetch('products.json')
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//             return response.json();
//         })
//         .then(data => {
//             const products = data;
//             let filteredProducts = [...products];

//             const searchInput = document.querySelector("#search");
//             const productsContainer = document.getElementById("products");

//             function renderProductCards(productsToShow) {
//                 productsContainer.innerHTML = '';
//                 productsToShow.forEach(product => {
//                     const productCard = createProductCard(product);
//                     productsContainer.appendChild(productCard);
//                 });
//             }

//             function sortProductsByName(products) {
//                 return products.sort((a, b) => a.title.localeCompare(b.title));
//             }

//             function captureText(event) {
//                 const searchText = event.target.value.toLowerCase();
//                 const filteredProducts = products.filter(product =>
//                     product.title.toLowerCase().includes(searchText)
//                 );
//                 renderProductCards(sortProductsByName(filteredProducts));
//             }

//             function createProductCard(product) {
//                 const card = document.createElement("a");
//                 card.className = "product-card";
//                 card.href = `./details.html?id=${product.id}`;

//                 const image = document.createElement("img");
//                 image.className = "product-img";
//                 image.src = product.images[0];
//                 image.alt = product.title.toUpperCase();

//                 const productInfo = document.createElement("div");
//                 productInfo.className = "product-info";

//                 const title = document.createElement("span");
//                 title.className = "product-title";
//                 title.textContent = product.title;

//                 const description = document.createElement("span");
//                 description.className = "product-description";
//                 description.textContent = product.colors.join(", ");

//                 const priceBlock = document.createElement("div");
//                 priceBlock.className = "product-price-block";

//                 const price = document.createElement("span");
//                 price.className = "price";
//                 price.textContent = `$${product.price}`;

//                 const discount = document.createElement("span");
//                 discount.className = "discount";
//                 discount.textContent = `${product.discount}% Off`;

//                 const taxPolicy = document.createElement("div");
//                 taxPolicy.className = "product-tax-policy";
//                 taxPolicy.textContent = "Incluye impuesto País y percepción AFIP";

//                 priceBlock.appendChild(price);
//                 priceBlock.appendChild(discount);
//                 productInfo.appendChild(title);
//                 productInfo.appendChild(description);
//                 productInfo.appendChild(priceBlock);
//                 productInfo.appendChild(taxPolicy);
//                 card.appendChild(image);
//                 card.appendChild(productInfo);

//                 return card;
//             }

//             renderProductCards(sortProductsByName(products));

//             searchInput.addEventListener("input", captureText);
//         })
//         .catch(error => console.error('Error al cargar el archivo JSON:', error));
// });

// act2

// document.addEventListener('DOMContentLoaded', async () => {
//     try{ 
        
//         const productsResponse = await fetch('products.json');
//         if (!productsResponse.ok) throw new Error('Error al cargar products.json');
//         const productData = await productsResponse.json();

//         Templalteproduct(productData)
//     }

//     catch (error) {
//         console.error('Error al cargar el archivo JSON:', error);
//     }

//     function Templalteproduct(data) {
//         const products = data;
//         let filteredProducts = [...products];

//         const searchInput = document.querySelector("#search");
//         const productsContainer = document.getElementById("products");

//         function renderProductCards(productsToShow) {
//             productsContainer.innerHTML = '';
//             productsToShow.forEach(product => {
//                 const productCard = createProductCard(product);
//                 productsContainer.appendChild(productCard);
//             });
//         }

//         function sortProductsByName(products) {
//             return products.sort((a, b) => a.title.localeCompare(b.title));
//         }

//         function captureText(event) {
//             const searchText = event.target.value.toLowerCase();
//             const filteredProducts = products.filter(product =>
//                 product.title.toLowerCase().includes(searchText)
//             );
//             renderProductCards(sortProductsByName(filteredProducts));
//         }

//         function createProductCard(product) {
//             const card = document.createElement("a");
//             card.className = "product-card";
//             card.href = `./details.html?id=${product.id}`;

//             const image = document.createElement("img");
//             image.className = "product-img";
//             image.src = product.images[0];
//             image.alt = product.title.toUpperCase();

//             const productInfo = document.createElement("div");
//             productInfo.className = "product-info";

//             const title = document.createElement("span");
//             title.className = "product-title";
//             title.textContent = product.title;

//             const description = document.createElement("span");
//             description.className = "product-description";
//             description.textContent = product.colors.join(", ");

//             const priceBlock = document.createElement("div");
//             priceBlock.className = "product-price-block";

//             const price = document.createElement("span");
//             price.className = "price";
//             price.textContent = `$${product.price}`;

//             const discount = document.createElement("span");
//             discount.className = "discount";
//             discount.textContent = `${product.discount}% Off`;

//             const taxPolicy = document.createElement("div");
//             taxPolicy.className = "product-tax-policy";
//             taxPolicy.textContent = "Incluye impuesto País y percepción AFIP";

//             priceBlock.appendChild(price);
//             priceBlock.appendChild(discount);
//             productInfo.appendChild(title);
//             productInfo.appendChild(description);
//             productInfo.appendChild(priceBlock);
//             productInfo.appendChild(taxPolicy);
//             card.appendChild(image);
//             card.appendChild(productInfo);

//             return card;
//         }

//         renderProductCards(sortProductsByName(products));

//         searchInput.addEventListener("input", captureText);
//     }
// });
