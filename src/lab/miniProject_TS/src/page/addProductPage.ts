import { Page } from "../interface"
import Product from "../product"
import ProductManager from "../productManager"
import State from "../state"

class AddProductPage implements Page {
    
    constructor() {}
    
    public show(): void {
        const products: ProductManager = State.getState().getProductManager()
        products.showProducts()
        const rl = State.getState().getRl()
        let id = State.getState().getId()
        rl.question('Please enter product name: ', (name: string) => {
            rl.question('Please enter product price: ', (price: number) => {
                State.getState().setId(++id)
                let newProduct: Product = new Product(++id, name, price)
                products.addProduct(newProduct)
                State.getState().getStack().pop()?.show()
            })
        })

    }


}

export default AddProductPage
