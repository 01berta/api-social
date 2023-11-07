const express = require('express');
const router = express.Router();
//pegamos a entidade em si dessa forma usando .AmizadeSeguindo
const AmizadeSeguindo = require('../models').AmizadeSeguindo;

//Cadastra AmizadeSeguindo (POST)
router.post('/add', async (req, res) => {
    try {
        const { idSeguidor, idSeguido, dataDeinicio } = req.body;
        const com = await AmizadeSeguindo.create({ idSeguidor, idSeguido, dataDeinicio })
        res.status(200).json({ message: 'Cadastrado com sucesso', com });
    } catch (error) {
        res.status(500).json({ message: "error ao cadastrar", error });
    }
});

//Buscar todas as amizades do usuario (GET)
router.get('/:id', async (req, res) => {
    const { id } = req.params; // Este é o ID do seguidor
    try {
        const amizade = await AmizadeSeguindo.sequelize.query(
            'SELECT * FROM amizade_seguido WHERE idSeguidor = :id',
            {
                type: AmizadeSeguindo.sequelize.QueryTypes.SELECT,
                replacements: { id },
            }
        );
        res.status(200).json(amizade);
    } catch (error) {
        res.status(500).json({ message: "error ao cadastrar", error });
    }
});

module.exports = router;
