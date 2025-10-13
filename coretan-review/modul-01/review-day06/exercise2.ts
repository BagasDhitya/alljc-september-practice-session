interface ISummary {
    name: string,
    price: number,
    quantity: number,
    subtotal: number
}

class Product {
    public name: string
    public price: number

    constructor(name: string, price: number) {
        this.name = name
        this.price = price
    }
}

class Transaction {
    private total: number
    private products: Product[]
    private quantities: number[]

    constructor() {
        this.total = 0
        this.products = []
        this.quantities = []
    }

    // method  untuk menambahkan produk ke keranjang
    public addToCart(product: Product, quantity: number) {

        // - cek apakah produk sudah ada di cart atau belum
        // - jika sudah, tambahkan quantity
        // - jika belum, masukkan ke array products dan quantities

        let found: boolean = false

        for (let i: number = 0; i < this.products.length; i++) {
            if (this.products[i]?.name === product.name) {
                this.quantities[i]! += quantity // tambahkan quantity
                found = true
            }
        }

        // jika belum ada, tambahkan manual ke array
        if (!found) {
            this.products.push(product)
            this.quantities.push(quantity)
        }

        // update total sementara
        this.total += product.price * quantity
    }

    // method untuk show total transaksi
    public showTotal() {
        console.log(`Current total: Rp${this.total}`)
    }

    // method untuk checkout/finalize pembayaran
    public checkout() {
        // buat summary transaksi

        let summary: ISummary[] = [] // bukti/struk ringkasan belanja
        let grandTotal: number = 0 // jumlah yang harus dibayar

        for (let i: number = 0; i < this.products.length; i++) {
            let product = this.products[i]
            let quantity = this.quantities[i]!
            let subtotal = product?.price! * quantity

            // masukkan semuanya ke summary
            summary[summary.length] = {
                name: product?.name as string,
                price: product?.price as number,
                quantity: quantity,
                subtotal: subtotal
            }

            grandTotal += subtotal
        }

        // hapus semua isi cart setelah checkout
        this.products = []
        this.quantities = []
        this.total = 0

        // kembalikan hasil transaksi
        return {
            TransactionSummary: summary,
            Total: grandTotal
        }
    }
}

let apple = new Product('Apple', 5000)
let banana = new Product('Banana', 3000)
let milk = new Product('Milk', 10000)

let transaction = new Transaction()

transaction.addToCart(apple, 2)
transaction.addToCart(banana, 3)
transaction.addToCart(milk, 1)
transaction.addToCart(apple, 1)

transaction.showTotal()

// finalize transaction
let finalize = transaction.checkout()
console.log(finalize)