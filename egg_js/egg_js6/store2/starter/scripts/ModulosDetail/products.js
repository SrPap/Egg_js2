// products.js
import { Product } from './product.js';

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

export const products = [prod1, prod2, prod3, prod4, prod5, prod6];
