"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductManager {
    constructor() {
        this.products = new Array();
    }
    deleteProduct(product) {
        this.products = this.products.filter(p => p.getId() !== product.getId());
    }
    showProducts() {
        let message = this.products.length === 0 ? 'Empty List' : '=========== Product List ===========';
        console.log(message);
        this.products.map(p => console.log(p.toString()));
    }
    isContain(product) {
        if (product === null)
            return false;
        return this.products.filter(p => p.getId() === product.getId()).length > 0;
    }
    addProduct(product) {
        this.products.push(product);
    }
    getSize() {
        return this.products.length;
    }
    getProduct(id) {
        let product = this.products.filter(p => p.getId() === id);
        return product[0];
    }
}
exports.default = ProductManager;
