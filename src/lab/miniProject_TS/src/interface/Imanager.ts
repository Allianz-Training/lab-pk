import Product from '../product'

export interface IManager {
    addProduct(product: Product): void
	deleteProduct(product: Product): void
	showProducts(): void
	isContain(product: Product): boolean
}
