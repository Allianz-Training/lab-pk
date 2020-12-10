"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = __importDefault(require("../state"));
const adminPage_1 = __importDefault(require("./adminPage"));
const productListPage_1 = __importDefault(require("./productListPage"));
class MainPage {
    show() {
        console.log('What do you want to buy ?');
        const rl = state_1.default.getState().getRl();
        rl.question('a. Buy Products\nb. Manage products\n', (input) => {
            switch (input) {
                case 'a':
                    state_1.default.getState().getStack().push(this);
                    new productListPage_1.default().show();
                    break;
                case 'b':
                    if (state_1.default.getState().getIsAdmin()) {
                        state_1.default.getState().getStack().push(this);
                        new adminPage_1.default().show();
                    }
                    else
                        this.show();
                    break;
                default:
                    this.show();
                    break;
            }
        });
    }
}
exports.default = MainPage;
