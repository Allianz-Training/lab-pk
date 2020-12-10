"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cart {
    constructor() {
        this.shoppingCart = new Map();
    }
    addProduct(product) {
        let count = this.shoppingCart.get(product) || 1;
        if (this.shoppingCart.has(product))
            count++;
        this.shoppingCart.set(product, count);
    }
    deleteProduct(product) {
        let count = this.shoppingCart.get(product) || 0;
        this.shoppingCart.set(product, --count);
        if (count <= 0)
            this.shoppingCart.delete(product);
    }
    showProducts() {
        if (this.shoppingCart.size === 0)
            console.log('Empty cart');
        this.shoppingCart.forEach((v, k) => console.log(k + ' ' + v));
        console.log('Total price is ', this.getTotalPrice());
    }
    isContain(product) {
        return this.shoppingCart.has(product);
    }
    getShoppingCart() {
        return this.shoppingCart;
    }
    getTotalPrice() {
        let totalPrice = 0;
        this.shoppingCart.forEach((v, k) => totalPrice += k.getPrice() * v);
        return totalPrice;
    }
}
exports.default = Cart;
