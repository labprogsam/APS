import path from 'path';
import express, { Request } from 'express';
import bodyParser from "body-parser";
import { Fachada } from './fachada';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const fachada = new Fachada();

app.get('/atividades', fachada.atividade.verAtividades);

app.get('/atividades/:id', fachada.atividade.verAtividadePorId);

app.post('/atividades', fachada.atividade.criarAtividade);

app.patch('/atividades/:id', fachada.atividade.editarAtividade);

app.delete('/atividades/:id', fachada.atividade.excluirAtividade);

app.listen(port,() => {
    console.log(`Servidor rodando na porta ${port}`);
});
