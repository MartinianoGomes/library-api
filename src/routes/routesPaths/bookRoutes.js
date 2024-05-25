import express from "express"
import { BookController } from "../../controllers/bookController.js"

const router = express.Router()

// Aqui deve ficar as rotas do sistema.
router.post('/create', BookController.createBook)
router.delete('/delete/:id', BookController.deleteBook)
router.get('/listAll/', BookController.listBooks)
router.put('/update/:id', BookController.updateBook)

export default router

// Informação importante: Caso haja uma expansão
// futura do projeto, seria interessante padronizar estas rotas.