"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = __importDefault(require("../state"));
const fs_1 = __importDefault(require("fs"));
class CheckoutPage {
    constructor() { }
    show() {
        console.log('=========== Checkout ===========');
        const cart = state_1.default.getState().getShoppingCart();
        const products = state_1.default.getState().getProductManager();
        cart.showProducts();
        const rl = state_1.default.getState().getRl();
        rl.question('Type product Id to delete\nb. back\nc. confirm\n', (input) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            switch (input) {
                case 'b':
                    (_a = state_1.default.getState().getStack().pop()) === null || _a === void 0 ? void 0 : _a.show();
                    break;
                case 'c':
                    if (cart.getShoppingCart().size > 0) {
                        rl.question('Please enter address: ', (address) => {
                            fs_1.default.writeFile('address.txt', address + '\r\n', err => {
                                if (err)
                                    console.error(err);
                                console.log('Thank you');
                            });
                        });
                    }
                    else
                        console.log('Thank you');
                    break;
                default:
                    if (!isNaN(+input)) {
                        let id = +input;
                        let p = products.getProduct(id);
                        if (products.isContain(p))
                            state_1.default.getState().getShoppingCart().deleteProduct(p);
                        else
                            console.log('Id not found, Please try again');
                    }
                    this.show();
                    break;
            }
        }));
    }
}
exports.default = CheckoutPage;
