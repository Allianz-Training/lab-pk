class Product {
    private id: number
    private title: string
    private price: number
    
    constructor(id: number, title: string, price: number) {
        this.id = id
        this.title = title
        this.price = price
    }

    public getId(): number {
        return this.id
    }

    public getTitle(): string {
        return this.title
    }

    public getPrice(): number {
        return this.price
    }

    public toString(): string {
        return `${this.id} ${this.title} ${this.price}`
    }

}

export default Product
