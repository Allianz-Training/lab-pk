import Cart from "./cart"
import { Page } from "./interface"
import ProductManager from "./productManager"
import * as readline from 'readline'

class State {
    private static singleton: State | null = null
	private isAdmin: boolean  = false
	private stack: Array<Page>
	private shoppingCart: Cart
    private products: ProductManager
	private rl: any
	private id: number
	
	constructor() {
		this.shoppingCart = new Cart()
		this.stack = new Array<Page>()
        this.products = new ProductManager()
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
		})
		this.id = 2
	}

	public static getState(): State  {
		if(this.singleton == null) {
			this.singleton = new State();
		}
		return this.singleton
	}
	
	public getRl(): any {
		return this.rl
	}
	
	public setIsAdmin(isAdmin: boolean): void {
		this.isAdmin = isAdmin
	}
	
	public getIsAdmin(): boolean  {
		return this.isAdmin
	}
	
	public getShoppingCart(): Cart {
		return this.shoppingCart
	}
	
	public getStack(): Array<Page>  {
		return this.stack
	}
	
	public getProductManager(): ProductManager  {
		return this.products
	}

	public getId(): number {
		return this.id
	}

	public setId(id: number): void {
		this.id = id
	}
}

export default State
