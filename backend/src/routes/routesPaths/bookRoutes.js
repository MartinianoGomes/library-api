import express from 'express'
import bookController from '../../controllers/bookController.js'

const router = express.Router();

router.get('/listAll', bookController.getAllBooks);
router.get('/getBook/:id', bookController.getBookById);
router.post('/create', bookController.createBook);
router.delete('delete/:id', bookController.deleteBook);

export default router;