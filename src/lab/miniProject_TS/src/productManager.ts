import { IManager } from './interface'
import Product from './product'

class ProductManager implements IManager {
	
	private products:Array<Product>
	
	constructor() {
		this.products = new Array<Product>();
	}

    public deleteProduct(product: Product): void {
        this.products = this.products.filter(p => p.getId() !== product.getId())
	}
	
    public showProducts(): void {
		let message: string = this.products.length === 0 ? 'Empty List' : '=========== Product List ==========='
		console.log(message)
		this.products.map(p => console.log(p.toString()))
	}
	
    public isContain(product: Product | null): boolean {
		if(product === null) return false
		return this.products.filter(p => p.getId() === product.getId()).length > 0
	}
	
	public addProduct(product: Product): void {
		this.products.push(product)
	}
	
	public getSize(): number {
		return this.products.length
	}
	
	public getProduct(id: number): Product {
        let product = this.products.filter(p => p.getId() === id)
        return product[0]
	}
	
}

export default ProductManager
