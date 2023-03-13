const express = require("express");
const router = express.Router();

const Livros = require('../controllers/livros');

router.get('/', Livros.teste);
router.post('/livros/criar', Livros.criar);
router.get('/livros/listar', Livros.listar);
router.get('/livros/listar/:id', Livros.listar);
router.put('/livros/alterar', Livros.alterar);
router.delete('/livros/excluir/:id', Livros.excluir);

module.exports = router