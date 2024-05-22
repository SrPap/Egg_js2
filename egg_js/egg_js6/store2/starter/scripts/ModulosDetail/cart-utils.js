// cart-utils.js
import { products } from './products.js';

export function saveProduct(id) {
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

    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProductIndex = cartItems.findIndex((item) => item.id === productData.id);

    if (existingProductIndex !== -1) {
        cartItems[existingProductIndex].quantity = productData.quantity;
        Swal.fire({
            title: '¡Actualizado!',
            text: 'La cantidad del producto en el carrito ha sido actualizada.',
            icon: 'info',
            confirmButtonText: 'Aceptar'
        });
    } else {
        cartItems.push(productData);
        Swal.fire({
            title: '¡Agregado!',
            text: 'El producto ha sido agregado al carrito.',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        });
    }

    localStorage.setItem("cart", JSON.stringify(cartItems));
}

export function saveProductfav(id) {
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

    let favItems = JSON.parse(localStorage.getItem("fav")) || [];

    if (!favItems.some(item => item.id === productData.id)) {
        favItems.push(productData);
        Swal.fire({
            title: '¡Favorito!',
            text: 'El producto ha sido agregado a favoritos.',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        });
    }

    localStorage.setItem("fav", JSON.stringify(favItems));
}
