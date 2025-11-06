import express from 'express'
import cors from 'cors'
import ProductRouter from './routers/product.router'

const app = express()
const PORT = 8000

// -- perlu cors jika frontend tidak jadi satu domain dengan API

// app.use(cors({
//     origin: 'http://127.0.0.1:5500'
// }))

app.use(express.static('public')) // untuk membaca index.html (visualize dari sembakoo API)
app.use(express.json())

app.use('/api/products', ProductRouter)

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})