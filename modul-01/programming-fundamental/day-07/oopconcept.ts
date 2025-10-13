class Product {
    private name: string
    private price: number

    constructor(name: string, price: number) {
        this.name = name
        this.price = price
    }

    public getProduct() {
        return {
            name: this.name,
            price: this.price
        }
    }
}

let product = new Product('Indomie Goreng Jumbo', 5500)
console.log(product.getProduct())

// encapsulation -> kejadian dimana memanggil property yang sifatnya private menggunakan medium method/function yang dipanggil diluar class