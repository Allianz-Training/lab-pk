"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = __importDefault(require("../product"));
const state_1 = __importDefault(require("../state"));
class AddProductPage {
    constructor() { }
    show() {
        const products = state_1.default.getState().getProductManager();
        products.showProducts();
        const rl = state_1.default.getState().getRl();
        let id = state_1.default.getState().getId();
        rl.question('Please enter product name: ', (name) => {
            rl.question('Please enter product price: ', (price) => {
                var _a;
                let newProduct = new product_1.default(++id, name, price);
                products.addProduct(newProduct);
                (_a = state_1.default.getState().getStack().pop()) === null || _a === void 0 ? void 0 : _a.show();
            });
        });
    }
}
exports.default = AddProductPage;
