const express = require('express');
const router = express.Router();
//pegamos a entidade em si dessa forma usando .Hashtags
const Hashtags = require('../models').Hashtags;

//Cadastra Hashtags (POST)
router.post('/add', async (req, res) => {
    try {
        const { textoDaHashtags } = req.body;
        const com = await Hashtags.create({ textoDaHashtags })
        res.status(200).json({ message: 'Cadastrado com sucesso', com });
    } catch (error) {
        res.status(500).json({ message: "error ao cadastrar", error });
    }
});

//Busca Hashtags (GET)
router.get('/all', async (req, res) => {
    const hashtags = await Hashtags.findAll();
    res.status(200).json(hashtags);
});

//Altera Hashtags por ID (PUT)
router.put('/:id', async (req, res) => {
    const { textoDaHashtags } = req.body;

    await Hashtags.update(
        { textoDaHashtags },
        {
            where: { id: req.params.id },
        }
    );
    res.status(200).json({ message: 'Atualizado com sucesso' });
});

//deletar o hashtags
router.delete('/:id', async (req, res) => {
    await Hashtags.destroy({
        where: {
            id: req.params.id,
        },
    });
    res.status(200).json({ message: 'Excluido com sucesso' })
});



module.exports = router;
