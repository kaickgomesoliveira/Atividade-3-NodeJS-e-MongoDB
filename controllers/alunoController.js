// Importar modelo de aluno
const AlunoModel = require('../models/aluno');

// GET /alunos — Exibir todos os alunos
exports.obterTodos = async (req, res) => {
    try {
        const alunos = await AlunoModel.find();
        res.json(alunos);
    } catch (error) {
        res.status(400).json({
            'message': 'Erro ao obter alunos',
            'error': error.message
        });
    }
};

// GET /alunos/:ra — Buscar um aluno pelo RA
exports.obterPorRa = async (req, res) => {
    const ra = req.params.ra;
    try {
        const aluno = await AlunoModel.findOne({ ra });
        if (!aluno) {
            return res.status(404).json({ 'message': 'Aluno não encontrado' });
        }
        res.json(aluno);
    } catch (error) {
        res.status(400).json({
            'message': 'Erro ao obter aluno',
            'error': error.message
        });
    }
};

// GET /alunos/:ra/disciplinas — Listar todas as disciplinas de um aluno
exports.obterDisciplinas = async (req, res) => {
    const ra = req.params.ra;
    try {
        const aluno = await AlunoModel.findOne({ ra });
        if (!aluno) {
            return res.status(404).json({ 'message': 'Aluno não encontrado' });
        }
        res.json(aluno.disciplinas);
    } catch (error) {
        res.status(400).json({
            'message': 'Erro ao obter disciplinas',
            'error': error.message
        });
    }
};

// PUT /alunos/:ra — Atualizar os dados de um aluno
exports.atualizar = async (req, res) => {
    const ra = req.params.ra;
    const dados = req.body;
    try {
        const resultado = await AlunoModel.findOneAndUpdate(
            { ra },
            dados,
            { new: true, runValidators: true }
        );
        if (!resultado) {
            return res.status(404).json({ 'message': 'Aluno não encontrado' });
        }
        res.json({ 'message': 'Aluno atualizado com sucesso', 'aluno': resultado });
    } catch (error) {
        res.status(400).json({
            'message': 'Erro ao atualizar aluno',
            'error': error.message
        });
    }
};
