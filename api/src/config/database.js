import mongoose from 'mongoose'

const url = 'mongodb://localhost:27017'

export const connect = async () => {
    try {
        const connection = await mongoose.connect(url)
        console.log('Conexão com o banco de dados estabelecida com sucesso.')
        return connection
    } catch (error) {
        console.log('Erro ao conectar ao banco de dados: ', error)
        throw error
    }
}