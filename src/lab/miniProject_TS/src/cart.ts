import { IManager } from "./interface"
import Product from "./product"

class Cart implements IManager {
    private shoppingCart: Map<Product, number> = new Map()

	constructor() {}
    
    public addProduct(product: Product): void {
        let count: number = this.shoppingCart.get(product) || 1
        if (this.shoppingCart.has(product)) count++
        this.shoppingCart.set(product, count)
    }

    public deleteProduct(product: Product): void {
        let count: number = this.shoppingCart.get(product) || 0
        this.shoppingCart.set(product, --count)
        if(count <= 0) this.shoppingCart.delete(product)
    }
    
    public showProducts(): void {
        if(this.shoppingCart.size === 0) console.log('Empty cart')
        this.shoppingCart.forEach((v, k) => console.log(k + ' ' + v))
        console.log('Total price is ', this.getTotalPrice())
    }

    public isContain(product: Product): boolean {
        return this.shoppingCart.has(product)
    }
	
	public getShoppingCart(): Map<Product, number> {
		return this.shoppingCart;
	}
	
	public getTotalPrice(): number {
		let totalPrice: number = 0;
        this.shoppingCart.forEach((v, k) => totalPrice += k.getPrice() * v)
		return totalPrice
	}

}

export default Cart
