const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors')
const app = express();
const port = 3000;

//configuracoes de controles
const comentario = require('./controllers/comentarioController.js');
const usuario = require('./controllers/usuarioController.js');
const hashtagpost = require('./controllers/hashtagsController.js');
const amizadeSeguindo = require('./controllers/amizadeController.js');

app.use(bodyParser.json());
app.use(cors());
app.use('/comentario', comentario);
app.use('/usuario', usuario);
app.use('/hashtags', hashtagpost);
app.use('/amizade-seguindo', amizadeSeguindo);

app.listen(port, () => console.log(`Servidor rodando porta ${port}!`));