// product.js
export class Product {
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
