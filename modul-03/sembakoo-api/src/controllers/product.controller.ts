import { Request, Response } from "express";
import { productService } from "../services/product.service";
import { Product } from "../dto/product.dto";

export const productController = {
    getAll(req: Request, res: Response) {
        const products = productService.getAll()
        res.status(200).send({
            success: true,
            data: products
        })
    },

    getById(req: Request, res: Response) {
        const { id } = req.params
        const product = productService.getById(Number(id))

        // jika produk tidak ditemukan
        if (!product) {
            return res.status(404).send({
                success: false,
                message: 'Product not found'
            })
        }

        res.status(200).send({
            success: true,
            data: product
        })
    },

    create(req: Request, res: Response) {
        const { title, image, description, price, stock }: Product = req.body

        // validasi body request
        if (!title || !image || !description || !price || !stock) {
            return res.status(400).send({
                success: false,
                message: 'Missing required fields'
            })
        }

        const newProduct = productService.create({ title, image, description, price, stock })
        res.status(201).send({
            success: true,
            message: 'Success create product',
            data: newProduct
        })
    },

    update(req: Request, res: Response) {
        const { id } = req.params

        const updated = productService.update(Number(id), req.body)

        // validasi jika produk tidak ditemukan
        if (!updated) {
            return res.status(404).send({
                success: false,
                message: 'Product not found'
            })
        }

        res.status(201).send({
            success: true,
            message: 'Success update product',
            data: updated
        })
    }
}