import { loadProducts } from './productLoader.js';
import { renderProductCards } from './productRenderer.js';
import { handleSearch } from './searchHandler.js';
import { loadNavigation } from './navLoader.js';
import { renderNavigation } from './navRenderer.js';
import { buildFooter } from './footerRender.js';



document.addEventListener('DOMContentLoaded', async () => {
    const searchInput = document.querySelector("#search");
    const productsContainer = document.getElementById("products");
    const navSelector = document.querySelector("#nav1");

    // Cargar y renderizar menú de navegación
    const navOptions = await loadNavigation();
    renderNavigation(navOptions.navigation, navSelector);

    // Renderizar el pie de pagina
    
    buildFooter(navOptions.footer)



    // Cargar y renderizar productos
    const products = await loadProducts();
    renderProductCards(products, productsContainer);

    // Manejar la búsqueda de productos
    searchInput.addEventListener("input", event => {
        const searchText = event.target.value.toLowerCase();
        handleSearch(products, searchText, productsContainer);
    });
});
