import { Router } from "express"
import { BookController } from "../controllers/bookController.js"

const routerBook = Router()

// Aqui deve ficar as rotas do sistema.
routerBook.post('/book', BookController.createBook)
routerBook.delete('/book/:id', BookController.deleteBook)
routerBook.get('/book/', BookController.listBooks)
routerBook.put('/book/:id', BookController.updateBook)

export { routerBook }