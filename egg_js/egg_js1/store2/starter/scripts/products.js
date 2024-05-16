
// // const producto1 = {
//     // nombre: "celular",
//     // precio: 100000,
//     // stock: 2,
//     // };
    
//     // producto1.id = "id123";
//     // producto1[foto] = "https://i.postimg.cc/Jn2C5W84/galaxy1.webp";

//     // console.log(producto1)
//     // console.log(producto1.nombre)
   
   
//     class Product {
//         constructor(id, title, price = 0, stock = 0, images = [], onsale = false, supplier = '') {
//         this.id = id;
//         this.title = title;
//         this.price = price;
//         this.stock = stock;
//         this.images = images;
//         this.onsale = onsale;
//         this.supplier = supplier;
        
//         }
//         get getSupplier() {
//             return this.supplier;
//             }
//             set setSupplier(newName) {
//             this.supplier = newName;
//             } 

//         // sellUnits(units) {
//         //         this.stock = this.stock - units
//         //     }

//              sellUnits(units) {
//                  if (units > 0 && units <= this.stock) {
//                      this.stock -= units; // Restar unidades del stock
//                      console.log(`Se vendieron ${units} unidades de ${this.title}. Stock restante: ${this.stock}`);
//                  } else {
//                      console.log(`No se pueden vender ${units} unidades de ${this.title}. Stock insuficiente.`);
//                  }
//              }
//     }
        
//     const prod1 = new Product();
//     const prod2 = new Product("bread","pan",1);
//     const prod3 = new Product("water","agua",2,30,null,true);
//     const prod4 = new Product("wine","vino",30,10,null,true,"Juan");
//     const prod5 = new Product("car","carro",20000,12,null,true,"Pedro");

//     console.log(prod1);
//     console.log(prod2);
//     console.log(prod3);
//     console.log(prod4);
//     console.log(prod5);

//     console.log(prod2.title);
//     console.log(prod3.onsale);
//     console.log(prod4.getSupplier);

//     prod5.sellUnits(10);
//     console.log(prod5);
//     prod5.sellUnits(5);
//     console.log(prod5);
//     // prod4.setSupplier = "Pedro";
//     // console.log(prod4.getSupplier);
        
// clase 5/ actividad 1

// class Product {
//     constructor(id, title, price = 0, stock = 0, images = [], onsale = false, supplier = '') {
//     this.id = id;
//     this.title = title;
//     this.price = price;
//     this.stock = stock;
//     this.images = images;
//     this.onsale = onsale;
//     this.supplier = supplier;
    
//     }
//     get getSupplier() {
//         return this.supplier;
//         }
//         set setSupplier(newName) {
//         this.supplier = newName;
//         } 

//     // sellUnits(units) {
//     //         this.stock = this.stock - units
//     //     }

//          sellUnits(units) {
//              if (units > 0 && units <= this.stock) {
//                  this.stock -= units; // Restar unidades del stock
//                  console.log(`Se vendieron ${units} unidades de ${this.title}. Stock restante: ${this.stock}`);
//              } else {
//                  console.log(`No se pueden vender ${units} unidades de ${this.title}. Stock insuficiente.`);
//              }
//          }
// }
    
// const prod1 = new Product();
// const prod2 = new Product("bread","pan",1);
// const prod3 = new Product("water","agua",2,30,null,true);
// const prod4 = new Product("wine","vino",30,10,null,true,"Juan");
// // const prod5 = new Product("car","carro",20000,12,null,true,"Pedro");

// const products = [prod1, prod2, prod3, prod4];


// console.log(products);

// console.log(products[1]);

// console.log(products[products.length - 1].title);

// clase 5 / actividad 2

// class Product {
//     constructor(id, title, price = 0, stock = 0, images = [], onsale = false, supplier = '') {
//     this.id = id;
//     this.title = title;
//     this.price = price;
//     this.stock = stock;
//     this.images = images;
//     this.onsale = onsale;
//     this.supplier = supplier;
    
//     }
//     get getSupplier() {
//         return this.supplier;
//         }
//         set setSupplier(newName) {
//         this.supplier = newName;
//         } 

//     // sellUnits(units) {
//     //         this.stock = this.stock - units
//     //     }

//          sellUnits(units) {
//              if (units > 0 && units <= this.stock) {
//                  this.stock -= units; // Restar unidades del stock
//                  console.log(`Se vendieron ${units} unidades de ${this.title}. Stock restante: ${this.stock}`);
//              } else {
//                  console.log(`No se pueden vender ${units} unidades de ${this.title}. Stock insuficiente.`);
//              }
//          }
// }

// const prod1 = new Product();
// const prod2 = new Product("bread","pan",1);
// const prod3 = new Product("water","agua",2,30,null,true);
// const prod4 = new Product("wine","vino",30,10,null,true,"Juan");
// const prod5 = new Product("car","carro",20000,12,null,true,"Pedro");
// const prod6 = new Product("paper","papel",20,1,null,false,"Juan");

// const products = [prod1, prod2, prod3, prod4];
// products.unshift(prod5);
// products.push(prod6);

// console.log(products);

// console.log(products[products.length - 1]);
// console.log(products[0]);

// clase 5 / actividad 3

// class Product {
//     constructor(id, title, price = 0, stock = 0, images = [], onsale = false, supplier = '') {
//     this.id = id;
//     this.title = title;
//     this.price = price;
//     this.stock = stock;
//     this.images = images;
//     this.onsale = onsale;
//     this.supplier = supplier;
    
//     }
//     get getSupplier() {
//         return this.supplier;
//         }
//         set setSupplier(newName) {
//         this.supplier = newName;
//         } 


//          sellUnits(units) {
//              if (units > 0 && units <= this.stock) {
//                  this.stock -= units; // Restar unidades del stock
//                  console.log(`Se vendieron ${units} unidades de ${this.title}. Stock restante: ${this.stock}`);
//              } else {
//                  console.log(`No se pueden vender ${units} unidades de ${this.title}. Stock insuficiente.`);
//              }
//          }
// }

// const prod1 = new Product();
// const prod2 = new Product("bread","pan",1);
// const prod3 = new Product("water","agua",2,30,null,true);
// const prod4 = new Product("wine","vino",30,10,null,true,"Juan");
// const prod5 = new Product("car","carro",20000,12,null,true,"Pedro");
// const prod6 = new Product("paper","papel",20,1,null,false,"Juan");



// const products = [prod1, prod2, prod3, prod4];

// products.unshift(prod5);
// products.push(prod6);


// console.log("Array original de productos:");
// console.log(products);

// const ultimoElementoEliminado = products.pop();
// console.log("Último elemento eliminado:");
// console.log(ultimoElementoEliminado);

// console.log("Array después de eliminar el último elemento:");
// console.log(products);

// const primerElementoEliminado = products.shift();
// console.log("Primer elemento eliminado:");
// console.log(primerElementoEliminado);

// console.log("Array después de eliminar el primer elemento:");
// console.log(products);

// clase 5 / actividad 4

// class Product {
//     constructor(id, title, price = 0, stock = 0, images = [], onsale = false, supplier = '',colors = '',description = '') {
//     this.id = id;
//     this.title = title;
//     this.price = price;
//     this.stock = stock;
//     this.images = images;
//     this.onsale = onsale;
//     this.supplier = supplier;
//     this.colors = colors;
//     this.description = description;
//     }
//     get getSupplier() {
//         return this.supplier;
//         }
//         set setSupplier(newName) {
//         this.supplier = newName;
//         } 


//          sellUnits(units) {
//              if (units > 0 && units <= this.stock) {
//                  this.stock -= units; // Restar unidades del stock
//                  console.log(`Se vendieron ${units} unidades de ${this.title}. Stock restante: ${this.stock}`);
//              } else {
//                  console.log(`No se pueden vender ${units} unidades de ${this.title}. Stock insuficiente.`);
//              }
//          }
// }

// const imagenesProd1 = ['/egg_js5/store/img_js/pan1.jpg', '/egg_js5/store/img_js/pan2.jpg', '/egg_js5/store/img_js/pan3.jpg']; //pan
// const imagenesProd2 = ['/egg_js5/store/img_js/agua1.jpg', '/egg_js5/store/img_js/agua2.jpg', '/egg_js5/store/img_js/agua3.jpg']; //agua
// const imagenesProd3 = ['/egg_js5/store/img_js/vino1.jpg', '/egg_js5/store/img_js/vino2.jpg']; //vino
// const imagenesProd4 = ['/egg_js5/store/img_js/carro1.jpg', '/egg_js5/store/img_js/carro2.jpg']; //carro
// const imagenesProd5 = ['/egg_js5/store/img_js/papel1.jpg', '/egg_js5/store/img_js/papel2.jpg']; //papel
// const imagenesProd6 = ['/egg_js5/store/img_js/silla1.jpg', '/egg_js5/store/img_js/silla2.jpg']; //silla


// const prod1 = new Product(1, "Pan", 1, 50, imagenesProd1, true, "Juan", ['blanco', 'negro', 'rojo'], "Pan fresco y crujiente");
// const prod2 = new Product(2, "Agua", 2, 100, imagenesProd2, false, "Pedro", ['azul', 'verde'], "Agua purificada sin gas");
// const prod3 = new Product(3, "Vino", 30, 20, imagenesProd3, true, "Carlos", ['rojo'], "Vino tinto reserva");
// const prod4 = new Product(4, "Carro", 20000, 5, imagenesProd4, false, "María", ['negro', 'gris'], "Carro deportivo de lujo");
// const prod5 = new Product(5, "Papel", 10, 200, imagenesProd5, true, "Ana", ['blanco'], "Papel de alta calidad");
// const prod6 = new Product(6, "Silla", 50, 30, imagenesProd6, false, "Luis", ['madera', 'negro'], "Silla ergonómica moderna");


// const products = [prod1, prod2, prod3, prod4, prod5, prod6];



//  // Obtener el contenedor de la galería de productos
//  const productContainer = document.querySelector('.product-container');

//  // Recorrer el array de productos y generar las tarjetas de producto
//  products.forEach(product => {
//      const productCard = document.createElement('div');
//      productCard.classList.add('product-card');

//      const productImage = document.createElement('img');
//      productImage.classList.add('product-image');
//      // Utilizar la primera imagen del array "images" del producto
//      productImage.src = product.images[0] || 'placeholder.jpg';
//      productImage.alt = product.title;

//      const productTitle = document.createElement('div');
//      productTitle.classList.add('product-title');
//      productTitle.textContent = product.title;

//      const productDetails = document.createElement('div');
//      productDetails.classList.add('product-details');
//      productDetails.textContent = `Precio: $${product.price} | Stock: ${product.stock}`;

//      // Agregar la imagen, título y detalles a la tarjeta de producto
//      productCard.appendChild(productImage);
//      productCard.appendChild(productTitle);
//      productCard.appendChild(productDetails);

//      // Agregar la tarjeta de producto al contenedor de la galería
//      productContainer.appendChild(productCard);
//  });
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