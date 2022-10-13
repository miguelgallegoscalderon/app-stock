const express = require('express')
const { default: mongoose } = require('mongoose')
const path = require('path')
require('dotenv').config()

const app = express()

mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_NAME}:${process.env.MONGO_DB_PASS}@development.jolrulx.mongodb.net/stock-app?retryWrites=true&w=majority`)
    .then((result) => console.log('Conexión exitosa'))
    .catch((err) => console.log(err))
const productSchema = mongoose.Schema({
    name: { type: String, require: true },
    price: Number
},
    {
        timestamps: true
    })

const Product = mongoose.model('Products', productSchema, 'ProductsMG')

app.use(express.json())

app.post('/api/v1/products', async (req, res, next) => {
    const newProduct = new Product(req.body)
    newProduct
    .save()
    .then((result) => {
        res.status(201).json({ ok: true })
    })
        .catch((err) => console.log(err))
})

app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT

app.listen(PORT, () => {

    console.log('Sevidor escuchando ${PORT}')
})