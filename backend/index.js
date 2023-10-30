const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors')
const app = express();
const port = 3000;

//configuracoes de controles
const comentario = require('./controllers/comentarioController.js');


app.use(bodyParser.json());
app.use(cors())
app.use('/comentario', comentario)
app.listen(port, () => console.log(`Servidor rodando porta ${port}!`))