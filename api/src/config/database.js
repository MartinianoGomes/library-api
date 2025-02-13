import express from 'express'
import mongoose, { connection } from 'mongoose'

const app = express()
app.use(express.json())

const url = 'mongodb://localhost:27017'

export const connect = async () => {

    try {
        app.listen(port, (req, res) => {
            mongoose.connect(url)
            console.log('Conexão com o banco de dados estabelecida com sucesso.')
            return connection
        })
    } catch (error) {
        console.log('Erro ao conectar ao banco de dados: ', error)
        throw error
    }
}