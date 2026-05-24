const express = require('express');
const router = express.Router();
const alunoController = require('../controllers/alunoController');

// GET /alunos — Exibir todos os alunos
router.get('/', alunoController.obterTodos);

// GET /alunos/:ra — Buscar um aluno pelo RA
router.get('/:ra', alunoController.obterPorRa);

// GET /alunos/:ra/disciplinas — Listar todas as disciplinas de um aluno
router.get('/:ra/disciplinas', alunoController.obterDisciplinas);

// PUT /alunos/:ra — Atualizar os dados de um aluno
router.put('/:ra', alunoController.atualizar);

module.exports = router;
