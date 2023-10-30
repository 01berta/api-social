const express = require('express');
const router = express.Router();
//pegamos a entidade em si dessa forma usando .Comentario
const Comentario = require('../models').Comentario;

//Cadastra Comentarios (POST)
router.post('/', async (req, res) => {
    const { descricao } = req.body;
    const newEdit = await Comentario.create({ descricao })
    res.status(200).json({ message: 'Cadastrado com sucesso' });
});
module.exports=router;