const express = require('express');
const bookController = require('../../controllers/bookController');

const router = express.Router();

router.get('/listAll', bookController.getAllBooks.bind(bookController));
router.get('/getBook/:id', bookController.getBookById.bind(bookController));
router.post('/create', bookController.createBook.bind(bookController));
router.delete('delete/:id', bookController.deleteBook.bind(bookController));

module.exports = router;