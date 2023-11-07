const express = require('express');
const router = express.Router();
//pegamos a entidade em si dessa forma usando .Hashtags
const Hashtags = require('../models').Hashtags;

//Cadastra Hasgtags (POST)
router.post('/add', async (req, res) => {
    try {
        const {textoDaHashtags} = req.body;
        const com = await Hashtags.create({ textoDaHashtags})
        res.status(200).json({ message: 'Cadastrado com sucesso', com });
    } catch (error) {
        res.status(500).json({ message: "error ao cadastrar", error });
    }
});



module.exports = router;
