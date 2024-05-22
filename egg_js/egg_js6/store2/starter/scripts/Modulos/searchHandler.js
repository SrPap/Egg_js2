import { renderProductCards } from './productRenderer.js';


export function handleSearch(products, searchText, productsContainer) {
    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchText)
    );
    renderProductCards(filteredProducts, productsContainer);
}
