class Product {
    public name: string
    public price: number

    constructor(name: string, price: number) {
        this.name = name
        this.price = price
    }
}

class Transaction {
    private products: Product[]
    private quantities: number[]
    private total: number

    constructor() {
        this.products = []
        this.quantities = []
        this.total = 0
    }

    // fungsi untuk menambahkan produk ke keranjang
    public addToCart(product: Product, qty: number) {
        if (qty <= 0) {
            console.log("Quantity must be greater than zero")
            return
        }

        let foundIndex: number = -1

        // cari apakah produk sudah ada di keranjang
        for (let i: number = 0; i < this.products.length; i++) {
            if (this.products[i]?.name === product.name) {
                foundIndex = i
            }
        }

        if (foundIndex !== -1) {
            // update quantity jika produk sudah ada
            this.quantities[foundIndex] = qty
        } else {
            // masukkan produk baru
            let newIndex: number = this.products.length
            this.products[newIndex] = product
            this.quantities[newIndex] = qty
        }

        console.log(`${qty} x ${product.name} added to cart`)
    }

    // fungsi untuk menampilkan total sementara
    public showTotal() {
        let tempTotal: number = 0

        for (let i: number = 0; i < this.products.length; i++) {
            let subtotal = this.products[i]?.price! * this.quantities[i]!
            tempTotal += subtotal
        }

        this.total = tempTotal
        console.log(`Current total : Rp${this.total}`)
    }

    // fungsi untuk checkout
    public checkout() {
        let items: { name?: string | undefined, price?: number | undefined, qty?: number | undefined, subtotal: number }[] = []
        let totalCheckout: number = 0

        for (let i: number = 0; i < this.products.length; i++) {
            let product = this.products[i]
            let qty = this.quantities[i]
            let subtotal = product?.price! * qty!

            // simpan data transaksi
            items[i] = {
                name: product?.name,
                price: product?.price,
                qty: qty,
                subtotal: subtotal
            }

            totalCheckout += subtotal
        }

        // reset keranjang
        this.products = []
        this.quantities = []
        this.total = 0

        console.log("Checkout succesful!")
        return {
            items: items,
            total: totalCheckout
        }
    }
}

const productA = new Product('Coffe', 30000)
const productB = new Product('Bread', 15000)
const productC = new Product('Milk', 20000)

const transaction = new Transaction()
transaction.addToCart(productA, 2)
transaction.addToCart(productB, 1)
transaction.addToCart(productC, 1)

transaction.showTotal()

const result = transaction.checkout()
console.log(result)