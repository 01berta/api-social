const express = require('express');
const router = express.Router();
//pegamos a entidade em si dessa forma usando .Usuario
const Usuario = require('../models').Usuario;

//Cadastra Usuario (POST)
router.post('/', async (req, res) => {
    try {
        const { nomeDeUsuario, fotoDePerfil, dataDeNascimento, biografia} = req.body;
        const com = await Usuario.create({ nomeDeUsuario, fotoDePerfil, dataDeNascimento, biografia })
        res.status(200).json({ message: 'Cadastrado com sucesso', com });
    } catch (error) {
        res.status(500).json({ message: "error ao cadastrar", error });
    }
});

module.exports = router;
