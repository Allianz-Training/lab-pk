import { Page } from "../interface"
import Product from "../product"
import ProductManager from "../productManager"
import State from "../state"
import fs from 'fs'

class CheckoutPage implements Page {
    constructor() {}
    
    public show(): void {
        console.log('=========== Checkout ===========')
        const cart = State.getState().getShoppingCart()
        const products: ProductManager = State.getState().getProductManager()
        cart.showProducts()
        const rl = State.getState().getRl()
        rl.question('Type product Id to delete\nb. back\nc. confirm\n', async (input: string) => {
            switch (input) {
                case 'b':
                    State.getState().getStack().pop()?.show()
                    break
                case 'c': 
                    if(cart.getShoppingCart().size > 0) {
                        rl.question('Please enter address: ', (address: string) => {
                            fs.writeFile('address.txt', address + '\r\n', err => {
                                if(err) console.error(err)
                                console.log('Thank you')
                            })
                        })
                    }
                    else console.log('Thank you')
                    break
                default:
                    if(!isNaN(+input)) {
                        let id: number = +input
                        let p: Product = products.getProduct(id)
                        if (products.isContain(p)) State.getState().getShoppingCart().deleteProduct(p)
                        else console.log('Id not found, Please try again')
                    }
                    this.show()
                    break
            }
        })
    }
}

export default CheckoutPage
