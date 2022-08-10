import path from 'path';
import express from 'express';
import { Fachada } from './fachada';

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', [path.join(__dirname,'./atividade/views')]);

const fachada = new Fachada();

app.get('/atividades', (req, res) => {
  const atividades = fachada.getAllAtividades();
  res.render('ver-atividades', { atividades });
});


app.listen(port,() => {
    console.log(`Servidor rodando na porta ${port}`);
});