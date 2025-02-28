import express from 'express'
import { BookController } from '../../controllers/bookController.js';

const router = express.Router();

router.get('/getAll', BookController.getAll);
router.get('/getBook/:id', BookController.getById);
router.put('/update/:id', BookController.updateBook);
router.post('/create', BookController.createBook);
router.delete('/delete/:id', BookController.deleteBook);

export default router;