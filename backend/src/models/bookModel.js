import mongoose from "mongoose"

//Esta é a tabela onde será guardada as informações dos livros no banco de dados.
export const Book = mongoose.model('Book', {
    title: String,
    author: String,
    genre: String,
    price: String,
    quantityInStorage: Number
})