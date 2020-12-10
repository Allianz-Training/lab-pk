import MainPage from './page/mainPage'
import Product from './product'
import State from './state'

let product: Product = new Product(1,"Iphone", 100000);
let product2: Product = new Product(2,"Samsung", 100000);

State.getState().getProductManager().addProduct(product);
State.getState().getProductManager().addProduct(product2);

State.getState().setIsAdmin(true);
let mainPage: MainPage = new MainPage();
mainPage.show();