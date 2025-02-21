// import express from 'express';
// import router from './routes/routes.js';
// import './config/database.js';

// const app = express();

// app.use(express.json());
// app.use(router);

// const startServer = async () => {
//     try {
//         await connect();
//         console.log('Conexão com o banco de dados estabelecida com sucesso.');
//         app.listen(3000, () => {
//             console.log('Servidor rodando na porta 3000.');
//         });
//     } catch (error) {
//         console.error('Erro ao iniciar o servidor:', error);
//     }
// };

// startServer();

import express from 'express';
import cors from 'cors';
import "dotenv/config";
import bookRoutes from './routes/routesPaths/bookRoutes.js';
import sequelize from './config/dbconfig.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use('/books', bookRoutes);

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    })
});