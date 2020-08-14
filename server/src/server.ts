import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

//GET : Buscar ou listar uma informação
//POST : Criar alguma nova informação
//PUT: Atualizar um informação existente
//DELETE : deletar uma informação existente

//Request Body : Dados para criação ou atualização de um registro.
//Route Params : Identificar qual recurso atualizar ou deletar
//Query Params : Paginação, filtros, ordenação.
app.get('/', (request,response) => {
    return response.json({ message: 'Hello World!'});
});

app.listen(3333);/*3333 é a porta que sera ouvida*/
