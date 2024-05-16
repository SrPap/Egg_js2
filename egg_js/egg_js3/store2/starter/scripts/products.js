
class Product {
    constructor(id, title, price = 0, stock = 0, images = [], onsale = false, discount = 0, colors = '', description = '') {
        this.id = id;
        this.title = title;
        this.price = price;
        this.stock = stock;
        this.images = images;
        this.onsale = onsale;
        this.discount = discount;
        this.colors = colors;
        this.description = description;
    }
}

const imagenesProd1 = ['/img_store_js/pan1.jpg', '/img_store_js/pan2.jpg', '/img_store_js/pan3.jpg']; //pan
const imagenesProd2 = ['/img_store_js/agua1.jpg', '/img_store_js/agua2.jpg', '/img_store_js/agua3.jpg']; //agua
const imagenesProd3 = ['/img_store_js/vino1.jpg', '/img_store_js/vino2.jpg']; //vino
const imagenesProd4 = ['/img_store_js/carro1.jpg', '/img_store_js/carro2.jpg']; //carro
const imagenesProd5 = ['/img_store_js/papel1.jpg', '/img_store_js/papel2.jpg']; //papel
const imagenesProd6 = ['/img_store_js/silla1.jpg', '/img_store_js/silla2.jpg']; //silla

const prod1 = new Product(1, "Pan", 1, 50, imagenesProd1, true, "10", ['blanco', 'negro', 'rojo'], "Pan fresco y crujiente");
const prod2 = new Product(2, "Agua", 2, 100, imagenesProd2, false, "10", ['azul', 'verde'], "Agua purificada sin gas");
const prod3 = new Product(3, "Vino", 30, 20, imagenesProd3, true, "10", ['rojo'], "Vino tinto reserva");
const prod4 = new Product(4, "Carro", 20000, 5, imagenesProd4, false, "10", ['negro', 'gris'], "Carro deportivo de lujo");
const prod5 = new Product(5, "Papel", 10, 200, imagenesProd5, true, "20", ['blanco'], "Papel de alta calidad");
const prod6 = new Product(6, "Silla", 50, 30, imagenesProd6, false, "12", ['madera', 'negro'], "Silla ergonómica moderna");

const products = [prod1, prod2, prod3, prod4, prod5, prod6];
 
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