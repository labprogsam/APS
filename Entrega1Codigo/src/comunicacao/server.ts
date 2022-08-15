import path from 'path';
import express from 'express';
import { Fachada } from '../negocio/fachada';

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', [path.join(__dirname,'../telas')]);

const fachada = new Fachada();

app.get('/atividades', (req, res) => {
  const atividades = fachada.verAtividades();
  res.render('ver-atividades', { atividades });
});


app.listen(port,() => {
    console.log(`Servidor rodando na porta ${port}`);
});
