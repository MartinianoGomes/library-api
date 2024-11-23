import { Book } from '../models/bookModel.js';

export class BookController {
    static async createBook(req, res) {
        try {
            const {
                title,
                author,
                genre,
                price,
                quantityInStorage
            } = req.body;

            const book = await Book.create({
                title,
                author,
                genre,
                price,
                quantityInStorage
            })

            if (book) return res.status(400).json({ error: "O livro já existe!" })

            return res.status(201).json(book);
        } catch (error) {
            return res.status(500).json({ error: "Erro ao criar o livor: " + error.message })
        }
    }

    static async deleteBook(req, res) {
        try {
            const { id } = req.params
            const book = await Book.findById(id)

            if (!book) return res.status(404).json({ error: "Livro não encontrado!"})

            await book.deleteOne()

            return res.status(200).json({ message: "Livro deletado com sucesso!" })
        } catch (error) {
            return res.status(500).json({ error: "Erro ao deletar o livor: " + error.message })
        }
    }

    static async updateBook(req, res) {
        try {
            const { id } = req.params

            const data = req.body

            console.log(data)

            const book = await Book.findByIdAndUpdate(id, data)

            if (!book) return res.status(404).json({ error: "Livro não encontrado!" })

            await book.save()

            return res.status(200).json({ message: "Livro alterado com sucesso!" })
        } catch (error) {
            return res.status(500).json({ error: "Erro ao atualizar o livor: " + error.message })
        }
    }

    static async listBooks(req, res) {
        try {
            let books = await Book.find()

            if (!books) return res.status(404).json({ error: "O recurso solicitado não foi encontrado" })

            return res.status(200).json({ books })
        } catch (error) {
            return res.status(500).json({ error: "Erro na busca pelos livros: " + error.message })
        }
    }
}