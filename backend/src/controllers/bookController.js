import Book from '../models/bookModel.js';
/* import connect from '../config/dbconfig.js'; */

export class BookController {
    /* async getAllBooks(req, res) {
        const connection = await connect();
        const books = await Book.findAll(connection);
        res.json(books);
    }

    async getBookById(req, res) {
        const connection = await connect();
        const book = await Book.findById(connection, req.params.id);
        if (book) {
            res.json(book);
        } else {
            res.status(404).send('Book not found');
        }
    }

    async createBook(req, res) {
        const connection = await connect();
        const newBook = new Book(null, req.body.title, req.body.author, req.body.publishedDate);
        const bookId = await Book.create(connection, newBook);
        res.status(201).json({ id: bookId });
    }

    async deleteBook(req, res) {
        const connection = await connect();
        const success = await Book.delete(connection, req.params.id);
        if (success) {
            res.status(204).send();
        } else {
            res.status(404).send('Book not found');
        }
    } */

    static async createBook(req, res) {
        try {
            const {
                title,
                author,
                publishedDate
            } = req.body;

            const book = await Book.create ({
                title,
                author,
                publishedDate
            })

            return res.status(201).json(book);
        } catch (error) {
            console.error('Erro ao criar "livro": ', error);
            return res.status(500).json({ error: 'Erro ao criar "livro"' });
        }
    }

    static async getAll(req, res) {
        try {
            const books = await Book.findAll();
            return res.status(200).json(books);
        } catch (error) {
            console.error('Erro ao buscar "livros": ', error);
            return res.status(500).json({ error: 'Erro ao buscar "livros"' });
        }
    }

    static async getById(req, res) {
        try {
            const { id } = req.params;
            const book = await Book.findById(id);

            if (!book) {
                return res.status(404).json({ error: 'Livro não encontrado' });
            }

            return res.status(200).json(book);
        } catch (error) {
            console.error('Erro ao buscar "livro": ', error);
            return res.status(500).json({ error: 'Erro ao buscar "livro"' });
        }
    }

    static async updateBook(req, res) {
        try {
            const { id } = req.params;
            const {
                title,
                author,
                publishedDate
            } = req.body;

            const book = await Book.findById(id);

            if (!book) {
                return res.status(404).json({ error: 'Livro não encontrado' });
            }

            const updatedBook = await Book.update(id, {
                title,
                author,
                publishedDate
            });

            return res.status(200).json(updatedBook);
        } catch (error) {
            console.error('Erro ao atualizar "livro": ', error);
            return res.status(500).json({ error: 'Erro ao atualizar "livro"' });
        }
    }

    static async deleteBook(req, res) {
        try {
            const { id } = req.params;
            const book = await Book.findById(id);

            if (!book) {
                return res.status(404).json({ error: 'Livro não encontrado' });
            }

            await Book.delete(id);

            return res.status(204).json({ message: 'Livro deletado com sucesso' });
        }catch(error) {
            console.error('Erro ao deletar "livro": ', error);
            return res.status(500).json({ error: 'Erro ao deletar "livro"' });
        }
    }
}