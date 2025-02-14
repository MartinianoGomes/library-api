import express from 'express'

import bookRoutes from './routesPaths/bookRoutes.js'
import swaggerUi from 'swagger-ui-express'
import { createRequire } from "module"

const require = createRequire(import.meta.url)
const swaggerDocs = require("../swagger.json")

const router = express.Router()

router.use('/book', bookRoutes)
router.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

export default router