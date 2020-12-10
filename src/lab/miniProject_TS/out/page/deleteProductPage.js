"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = __importDefault(require("../state"));
class DeleteProductPage {
    constructor() { }
    show() {
        const products = state_1.default.getState().getProductManager();
        products.showProducts();
        const rl = state_1.default.getState().getRl();
        rl.question('Type product Id to delete\nb. back\n', (input) => {
            var _a;
            switch (input) {
                case 'b': {
                    (_a = state_1.default.getState().getStack().pop()) === null || _a === void 0 ? void 0 : _a.show();
                    break;
                }
                default: {
                    if (!isNaN(+input)) {
                        let id = +input;
                        let p = products.getProduct(id);
                        if (products.isContain(p))
                            products.deleteProduct(p);
                        else
                            console.log('Id not found, Please try again');
                    }
                    this.show();
                    break;
                }
            }
        });
    }
}
exports.default = DeleteProductPage;
