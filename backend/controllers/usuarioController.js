const express = require('express');
const router = express.Router();
//pegamos a entidade em si dessa forma usando .Usuario
const Usuario = require('../models').Usuario;

//Cadastra Usuario (POST)
router.post('/add', async (req, res) => {
    try {
        const { nomeDeUsuario, fotoDePerfil, dataDeNascimento, biografia} = req.body;
        const com = await Usuario.create({ nomeDeUsuario, fotoDePerfil, dataDeNascimento, biografia })
        res.status(200).json({ message: 'Cadastrado com sucesso', com });
    } catch (error) {
        res.status(500).json({ message: "error ao cadastrar", error });
    }
});
//Busca Usuario (GET)
router.get('/all', async (req, res) => {
const usuarios = await Usuario.findAll();
res.status(200).json(usuarios);
});
//Altera Usuario por ID (PUT)
router.put('/:id', async (req, res) =>{
    const { nomeDeUsuario, fotoDePerfil, dataDeNascimento, biografia} = req.body;

await Usuario.update(
{ nomeDeUsuario, fotoDePerfil, dataDeNascimento, biografia},
{
    where: {id:req.params.id},
}
);
res.status(200).json({message: 'Atualizado com sucesso'});
});

//deletar o usuario
router.delete('/:id', async (req, res) =>{
await Usuario.destroy({
where:{
    id: req.params.id,
},
});
res.status(200).json({message:'Excluido com sucesso'})
});


module.exports = router;
