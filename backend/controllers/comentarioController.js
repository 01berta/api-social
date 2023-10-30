const express = require('express');
const router = express.Router();
//pegamos a entidade em si dessa forma usando .Comentario
const Comentario = require('../models').Comentario;

//Cadastra Comentarios (POST)
router.post('/add', async (req, res) => {
    try {
        const { Texto_Conteudo_do_Comentario, dataDoComentario } = req.body;
        const com = await Comentario.create({ Texto_Conteudo_do_Comentario, dataDoComentario })
        res.status(200).json({ message: 'Cadastrado com sucesso', com });
    } catch (error) {
        res.status(500).json({ message: "error ao cadastrar", error });
    }
});
module.exports = router;