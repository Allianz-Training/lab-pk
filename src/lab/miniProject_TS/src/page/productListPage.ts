import { Page } from "../interface"
import Product from "../product"
import ProductManager from "../productManager"
import State from "../state"
import CheckoutPage from "./checkoutPage"

class ProductListPage implements Page {
    constructor() {}
    public show(): void {
        const products: ProductManager = State.getState().getProductManager()
        products.showProducts()
        const rl = State.getState().getRl()
        rl.question('Type product Id to buy\nb. back\nc. checkout\n', (input: string) => {
            switch (input) {
                case 'b':
                    State.getState().getStack().pop()?.show()
                    break
                case 'c': 
                    State.getState().getStack().push(this)
                    new CheckoutPage().show()
                    break
                default:
                    if(!isNaN(+input)) {
                        let id: number = +input
                        let p: Product = products.getProduct(id)
                        if (products.isContain(p)) State.getState().getShoppingCart().addProduct(p)
                        else console.log('Id not found, Please try again')
                    }
                    this.show()
                    break
            }
        })
    }

}

export default ProductListPage
