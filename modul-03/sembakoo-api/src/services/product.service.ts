import fs, { read, write } from 'fs'
import path from 'path'
import { Product } from '../dto/product.dto'

// cari path ke products.json
const dataPath = path.join(__dirname, '../../dummy/products.json')

// fungsi membaca file json
function readProducts(): Product[] {
    const data = fs.readFileSync(dataPath, 'utf-8')
    return JSON.parse(data)
}

// fungsi tulis file json
function writeProduct(products: Product[]): void {
    fs.writeFileSync(dataPath, JSON.stringify(products, null, 2))
}

export const productService = {
    getAll(): Product[] {
        return readProducts()
    },

    getById(id: number): Product | undefined {
        const products = readProducts()
        return products.find((item) => item.id === id)
    },

    create(newProduct: Omit<Product, 'id'>): Product {
        const products = readProducts()
        const id = products.length > 0 ? products[products.length - 1].id + 1 : 1
        const product: Product = { id, ...newProduct }

        products.push(product)
        writeProduct(products)
        return product
    },

    update(id: number, updatedData: Partial<Product>): Product | undefined {
        const products = readProducts()
        const index = products.findIndex((item) => item.id === id)

        // validasi jika id tidak ditemuka 
        if (index === -1) {
            return undefined
        }

        products[index] = { ...products[index], ...updatedData }
        writeProduct(products)
        return products[index]
    }
}