const express = require('express');
const router = express.Router();
const userController = require('../controllers/usuarioController');

router.get('/', userController.obterTodos);
router.get('/email/:email', userController.obterPorEmail);
router.get('/:id', userController.obterPorId);
router.post('/', userController.inserir);
router.put('/:id', userController.atualizar);
router.delete('/:id', userController.excluir);

module.exports = router;
