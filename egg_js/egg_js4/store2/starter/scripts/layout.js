// act1

const navselector = document.querySelector("#nav1");

const optionsNav = [
    { title: "Ofertas de la semana", linkTo: "./outlet.html" },
    { title: "Como comprar", linkTo: "./how.html" },
    { title: "Costos y tarifas", linkTo: "./taxs.html" },
    { title: "Mis pedidos", linkTo: "./cart.html" },
    { title: "Garantia", linkTo: "./warranty.html" },
];

for (let option of optionsNav) {
    const anchor = document.createElement("a");
    anchor.className = "nav-button";
    anchor.textContent = option.title;
    anchor.href = option.linkTo;

    navselector.appendChild(anchor);
};

// act2


const footerSelector = document.querySelector("#footer");

const optionsFooter = [
    { title: ["Ofertas"], opts: ["Laptops", "Audio", "Auticulares"] ,linkTo: "index.html"},
    { title: ["Como comprar"], opts: ["Formas de pago", "Envios", "Devoluciones"] ,linkTo: "index.html"},
    { title: ["Costos y tarifas"], opts: ["Impuestos", "Facturacion"] ,linkTo: "index.html"},
    { title: ["Mis pedidos"], opts: ["Pedir nuevamente", "Listas de deseos"] ,linkTo: "cart.html"},
    { title: ["Garantia"], opts: [] ,linkTo: "index.html"},
    ];


    for (let option of optionsFooter) {
    //crear un elemento
    let anchor = document.createElement("ul");
    //asignarle un nombre de clase
    anchor.className = "footer-ul";
    //agregar un il
    let li = document.createElement("li");
    //asignarle una clase
    li.className = "footer-main-item";
    //crear una etiqueta a
    let a = document.createElement("a");
    //asignarle un nombre de clase
    a.className = "footer-a";
    //asignarle un texto
    a.textContent = option.title;
    //asignarle un href
    a.href = option.linkTo;

    //agregar al li
    li.appendChild(a);
    //agregar a la ul
    anchor.appendChild(li);

    //iteracion con un for of
    for (let opt of option.opts) {
        //crear un li
        let li = document.createElement("li");
        //asignarle una clase
        li.className = "footer-li";
        //crear una etiqueta a
        let a = document.createElement("a");
        //asignarle un nombre de clase
        a.className = "footer-a";
        //asignarle un texto
        a.textContent = opt;
        //agregar al li
        li.appendChild(a);
        //agregar a la ul
        anchor.appendChild(li);

}
footerSelector.appendChild(anchor);
}

// act3


const productsSelector = document.getElementById("products");

