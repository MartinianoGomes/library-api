// Importação das dependências do sistema, como o Express e Mongoose.
// O Express é para o auxílio do manuseio do servidor do sistema.
// O Mongoose é para o manuseio do banco de dados do sistema.
// o Swagger é para documentação da API.
import express from 'express'
import mongoose from 'mongoose'

import router from './routes/routes.js'

// Iniciando as instâncias do Express e dizendo para ele trabalhar com JSON's.
const app = express()
app.use(express.json())

const port = 3000

app.use(router)

app.listen(port, (req, res) => {
    mongoose.connect('mongodb://localhost:27017')

    console.log('O programa está escutando na porta: ' + port)
})