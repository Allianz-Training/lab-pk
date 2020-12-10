"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = __importDefault(require("../state"));
const addProductPage_1 = __importDefault(require("./addProductPage"));
const deleteProductPage_1 = __importDefault(require("./deleteProductPage"));
class AdminPage {
    constructor() { }
    show() {
        console.log('=========== Admin Mode ===========');
        const rl = state_1.default.getState().getRl();
        rl.question('a. Add product\nb. Delete product\nc. Back\n', (input) => {
            var _a;
            switch (input) {
                case 'a': {
                    state_1.default.getState().getStack().push(this);
                    new addProductPage_1.default().show();
                    break;
                }
                case 'b': {
                    state_1.default.getState().getStack().push(this);
                    new deleteProductPage_1.default().show();
                    break;
                }
                case 'c': {
                    (_a = state_1.default.getState().getStack().pop()) === null || _a === void 0 ? void 0 : _a.show();
                    break;
                }
                default: {
                    this.show();
                    break;
                }
            }
        });
    }
}
exports.default = AdminPage;
