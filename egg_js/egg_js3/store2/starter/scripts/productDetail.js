function resetLocalStorage() {
  localStorage.clear(); // Limpiar todos los datos almacenados en localStorage
}
function reloadPage() {
  location.reload(); // Recargar la página
}


const query = location.search;
const params = new URLSearchParams(query);
const id = params.get('id');
console.log(id);

function printDetails(id) {
    // Encontrar el producto con el ID proporcionado
    const product = products.find((each) => each.id === id);
 
    // Verificar si se encontró un producto con el ID dado
    if (!product) {
       console.error(`No se encontró ningún producto con el ID ${id}`);
       return; // Salir de la función si no se encuentra el producto
    }
 
     // Generar las opciones del <select> a partir del array de colores del producto
    const colorOptions = product.colors.map(
    (color) => `<option value="${color}">${color}</option>`
    ).join(""); // Unir todas las opciones en una cadena

 // Generar las miniaturas de las imágenes del producto con la clase "product-img"
 const imageThumbnails = product.images.map(
    (image) => `<img class="miniImg" src="${image}" alt="mini" onclick="changeMini(event)" />`
 ).join(""); // Unir todas las miniaturas en una cadena


     // Definir la plantilla de detalles del producto con las miniaturas de imágenes
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
                <label class="product-label" for="color">Color</label>
                <select
                  class="product-select"
                  type="text"
                  placeholder="Selecciona un color"
                  id="colorSelect"
                  name="colorSelect"
                  >
                  ${colorOptions}
                </select>

              </fieldset>
            </form>
            <div class="product-description">
              <span class="product-label">Descripción</span>
              <p>
                ${product.description}
              </p>
            </div>
          </div>

          <div class="product-checkout-block">
            <div class="checkout-container">
              <span class="checkout-total-label">Total:</span>
              <h2 id="price" class="checkout-total-price">$${product.price}</h2>
              <p class="checkout-description">
                Incluye impuesto País y percepción AFIP
              </p>
              <ul class="checkout-policy-list">
                <li>
                  <span class="policy-icon"
                    ><img src="./assets/truck.png" alt="Truck"
                  /></span>
                  <span class="policy-desc"
                    >Agrega el producto al carrito para conocer los costos de
                    envío</span
                  >
                </li>
                <li>
                  <span class="policy-icon"
                    ><img src="./assets/plane.png" alt="Plane"
                  /></span>
                  <span class="policy-desc"
                    >Recibí aproximadamente entre 10 y 15 días hábiles,
                    seleccionando envío normal.</span
                  >
                </li>
              </ul>
              <div class="checkout-process">
                <div class="top">
                  <input id="quantity" type="number" min="1" value="1" onkeyup="changePrice(event)" />
                  <button onclick="saveProduct(${id})" type="button" class="cart-btn">
                    Añadir al Carrito
                  </button>
                </div>
                <button onclick="saveProductfav(${id})" type="button" class="cart-btn">
                    Añadir a favoritos
                  </button>
              </div>
            </div>
          </div>
`;
 
    // Seleccionar el elemento donde se imprimirá la plantilla
    const detailsSelector = document.querySelector("#details");
 
    // Actualizar la vista de detalles con la plantilla renderizada
    detailsSelector.innerHTML = detailsTemplate;
 }



 
 function saveProduct(id) {
  const product = products.find((each) => each.id === id);
  const selectedColor = document.querySelector("#colorSelect").value;
  const selectedQuantity = parseInt(document.querySelector("#quantity").value);

  if (!product) {
      console.error(`No se encontró ningún producto con el ID ${id}`);
      return;
  }

  const productData = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.images[0],
      color: selectedColor,
      quantity: selectedQuantity,
      description: product.description,
      stock: product.stock
  };

  let cartItems = [];

  // Verificar si existe la clave 'cart' en localStorage
  const cartItemsJSON = localStorage.getItem("cart");
  if (cartItemsJSON) {
      // Si 'cart' existe, obtener el array de productos del carrito
      cartItems = JSON.parse(cartItemsJSON);
  }

  // Verificar si el producto ya está en el carrito
  const existingProductIndex = cartItems.findIndex((item) => item.id === productData.id);

  if (existingProductIndex !== -1) {
      // Si el producto ya está en el carrito, actualizar la cantidad
      cartItems[existingProductIndex].quantity = productData.quantity;
  } else {
      // Si el producto no está en el carrito, agregarlo
      cartItems.push(productData);
  }

  // Guardar el array actualizado en localStorage
  localStorage.setItem("cart", JSON.stringify(cartItems));
}



// Función para actualizar el subtotal al cambiar la cantidad de productos
function changePrice(event) {
   const quantity = parseInt(event.target.value); // Obtener la cantidad ingresada como número entero
   const productId = idNumero; // Obtener el ID del producto
   const product = products.find((each) => each.id === productId); // Buscar el producto por ID


   if (product) {
      let subtotal = product.price * quantity; // Calcular el subtotal
      const subtotalElement = document.querySelector("#price"); // Seleccionar el elemento del subtotal
      subtotalElement.textContent = `$ ${subtotal}`; // Actualizar el subtotal en la vista
   }
   
}


 
// Función para cambiar la imagen agrandada al hacer clic en una miniatura
function changeMini(event) {
   const selectedSrc = event.target.src;
   const bigImage = document.querySelector("#bigImg");
   bigImage.src = selectedSrc;
}

 // Capturar el parámetro 'id' de la URL
const busqueda = location.search;
const parammetros = new URLSearchParams(query);
const idNumero = parseInt(params.get('id')); // Convertir a número entero

// Llamar a la función printDetails con el 'id' capturado
printDetails(idNumero);
 
// Seleccionar el input numérico de cantidad
const quantityInput = document.querySelector("#quantity");


// Favorite

function saveProductfav(id) {
  const product = products.find((each) => each.id === id);
  const selectedColor = document.querySelector("#colorSelect").value;
  const selectedQuantity = parseInt(document.querySelector("#quantity").value);

  if (!product) {
      console.error(`No se encontró ningún producto con el ID ${id}`);
      return;
  }

  const productData = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.images[0],
      color: selectedColor,
      quantity: selectedQuantity,
      description: product.description,
      stock: product.stock
  };

  let cartItems = [];

  // Verificar si existe la clave 'cart' en localStorage
  const cartItemsJSON = localStorage.getItem("fav");
  if (cartItemsJSON) {
      // Si 'cart' existe, obtener el array de productos del carrito
      cartItems = JSON.parse(cartItemsJSON);
  }

  // Verificar si el producto ya está en el carrito
  const existingProductIndex = cartItems.findIndex((item) => item.id === productData.id);

  if (existingProductIndex !== -1) {
      // Si el producto ya está en el carrito, actualizar la cantidad
      cartItems[existingProductIndex].quantity = productData.quantity;
  } else {
      // Si el producto no está en el carrito, agregarlo
      cartItems.push(productData);
  }

  // Guardar el array actualizado en localStorage
  localStorage.setItem("fav", JSON.stringify(cartItems));
}