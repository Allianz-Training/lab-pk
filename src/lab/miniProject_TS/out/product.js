"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    constructor(id, title, price) {
        this.id = id;
        this.title = title;
        this.price = price;
    }
    getId() {
        return this.id;
    }
    getTitle() {
        return this.title;
    }
    getPrice() {
        return this.price;
    }
    toString() {
        return `${this.id} ${this.title} ${this.price}`;
    }
}
exports.default = Product;
