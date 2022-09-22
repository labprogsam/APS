import 'dotenv/config';
import express from 'express';
import bodyParser from "body-parser";
import { AtividadeController } from './comunicacao';

const app = express();
const port = process.env.API_PORT;

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', "*");

    // Pass to next layer of middleware
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const atividadeController = new AtividadeController();

app.get('/atividades', atividadeController.verAtividades);

app.get('/atividades/:id', atividadeController.verAtividadePorId);

app.post('/atividades', atividadeController.criarAtividade);

app.patch('/atividades/:id', atividadeController.editarAtividade);

app.delete('/atividades/:id', atividadeController.excluirAtividade);

app.listen(port,() => {
    console.log(`Servidor rodando na porta ${port}`);
});
