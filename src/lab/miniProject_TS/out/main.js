"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mainPage_1 = __importDefault(require("./page/mainPage"));
const product_1 = __importDefault(require("./product"));
const state_1 = __importDefault(require("./state"));
let product = new product_1.default(1, "Iphone", 100000);
let product2 = new product_1.default(2, "Samsung", 100000);
state_1.default.getState().getProductManager().addProduct(product);
state_1.default.getState().getProductManager().addProduct(product2);
state_1.default.getState().setIsAdmin(true);
let mainPage = new mainPage_1.default();
mainPage.show();
