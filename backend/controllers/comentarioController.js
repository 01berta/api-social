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

//Busca Comentario (GET)
router.get('/all', async (req, res) => {
const comentarios = await Comentario.findAll();
res.status(200).json(comentarios);
});
//Altera Comentario por ID (PUT)
router.put('/:id', async (req, res) =>{
    const {Texto_Conteudo_do_Comentario, dataDoComentario} = req.body;
    await Comentario.update(
        {Texto_Conteudo_do_Comentario, dataDoComentario},
        {
            where: {id:req.params.id},
        }
    );
    res.status(200).json({message: 'Atulizado com sucesso'});
});
//deletar o comentario
router.delete('/:id', async (req, res) =>{
    await Comentario.destroy({
        where:{
            id: req.params.id,
        },
    });
    res.status(200).json({message:'Excluido com sucesso'})
});
module.exports = router;