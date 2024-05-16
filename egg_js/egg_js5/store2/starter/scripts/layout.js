// act1

// document.addEventListener("DOMContentLoaded", () => {
//     // Cargar el archivo JSON
//     fetch('./options.json')
//         .then(response => response.json())
//         .then(data => {
//             // Procesar datos del JSON
//             buildNavigation(data.navigation);
//             buildFooter(data.footer);
//         })
//         .catch(error => console.error('Error al cargar el archivo JSON:', error));
// });

// function buildNavigation(optionsNav) {
//     const navselector = document.querySelector("#nav1");
    
//     optionsNav.forEach(option => {
//         const anchor = document.createElement("a");
//         anchor.className = "nav-button";
//         anchor.textContent = option.title;
//         anchor.href = option.linkTo;
        
//         navselector.appendChild(anchor);
//     });
// }

// function buildFooter(optionsFooter) {
//     const footerSelector = document.querySelector("#footer");
    
//     optionsFooter.forEach(option => {
//         let anchor = document.createElement("ul");
//         anchor.className = "footer-ul";
        
//         let li = document.createElement("li");
//         li.className = "footer-main-item";
        
//         let a = document.createElement("a");
//         a.className = "footer-a";
//         a.textContent = option.title;
//         a.href = option.linkTo;
        
//         li.appendChild(a);
//         anchor.appendChild(li);
        
//         option.opts.forEach(opt => {
//             let li = document.createElement("li");
//             li.className = "footer-li";
            
//             let a = document.createElement("a");
//             a.className = "footer-a";
//             a.textContent = opt;
            
//             li.appendChild(a);
//             anchor.appendChild(li);
//         });
        
//         footerSelector.appendChild(anchor);
//     });
// }

// act2

// document.addEventListener('DOMContentLoaded', async () => {
//     try {
//         Cargar opciones de navegación y pie de página
//         const optionsResponse = await fetch('options.json');
//         if (!optionsResponse.ok) throw new Error('Error al cargar options.json');
//         const optionsData = await optionsResponse.json();

//         renderNavigation(optionsData.navigation);
//         renderFooter(optionsData.footer);

//     } catch (error) {
//         console.error('Error al cargar el archivo JSON:', error);
//     }
// });

// function renderNavigation(optionsNav) {
//     const navselector = document.querySelector("#nav1");
//     optionsNav.forEach(option => {
//         const anchor = document.createElement("a");
//         anchor.className = "nav-button";
//         anchor.textContent = option.title;
//         anchor.href = option.linkTo;
//         navselector.appendChild(anchor);
//     });
// }

// function renderFooter(optionsFooter) {
//     const footerSelector = document.querySelector("#footer");
//     optionsFooter.forEach(option => {
//         let ul = document.createElement("ul");
//         ul.className = "footer-ul";

//         let li = document.createElement("li");
//         li.className = "footer-main-item";

//         let a = document.createElement("a");
//         a.className = "footer-a";
//         a.textContent = option.title;
//         a.href = option.linkTo;

//         li.appendChild(a);
//         ul.appendChild(li);

//         option.opts.forEach(opt => {
//             let li = document.createElement("li");
//             li.className = "footer-li";

//             let a = document.createElement("a");
//             a.className = "footer-a";
//             a.textContent = opt;

//             li.appendChild(a);
//             ul.appendChild(li);
//         });

//         footerSelector.appendChild(ul);
//     });
// }
