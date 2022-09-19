import express from 'express';
import bodyParser from "body-parser";
import { AtividadeController } from './comunicacao';

const app = express();
const port = 3000;

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
