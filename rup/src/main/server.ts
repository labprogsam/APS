import path from 'path';
import express from 'express';
import bodyParser from "body-parser";
import { Fachada } from './fachada';

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', [path.join(__dirname,'../telas')]);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const fachada = new Fachada();

app.get('/atividades', (req, res) => {
  const atividades = fachada.verAtividades();
  res.render('ver-atividades', { atividades });
});

app.get('/atividades/criar', (_, res) => {
  res.render('criar-atividade');
});

app.post('/atividades/criar', (req, res) => {
  fachada.criarAtividade(req.body);
  res.redirect('/atividades');
});

app.get('/atividades/editar/:id', (req, res) => {
  const atividade = fachada.verAtividadePorId(req.params.id);
  res.render('editar-atividade', { atividade });
});

app.post('/atividades/editar/:id', (req, res) => {
  fachada.editarAtividade({ id: req.params.id, ...req.body });
  res.redirect('/atividades');
});

app.get('/atividades/concluida/:id', (req, res) => {
  fachada.marcarAtividadeComoConcluida(req.params.id);
  res.redirect('/atividades');
});

app.get('/atividades/excluir/:id', (req, res) => {
  fachada.excluirAtividade(req.params.id);
  res.redirect('/atividades');
});

app.listen(port,() => {
    console.log(`Servidor rodando na porta ${port}`);
});
