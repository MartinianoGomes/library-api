const Book = require('../models/bookModel');
const { connect } = require('../config/dbconfig');

class BookController {
    async getAllBooks(req, res) {
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
    }
}

module.exports = new BookController();