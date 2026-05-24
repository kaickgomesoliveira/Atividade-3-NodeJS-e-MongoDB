// Importar modelo de usuário (simulando um banco de dados, etc.)
const UsuarioModel = require('../models/usuario');

// Lógica para criar um novo usuário
exports.inserir = async (req, res) => {
    const usuario = req.body;
    try {
        await UsuarioModel.create(usuario);
        res.status(201).json(usuario);
    } catch (error) {
        res.status(400).json({
            'message': 'Erro ao inserir usuário',
            'error': error.message
        });
    }
};

exports.obterTodos = async (req, res) => {
    try {
        const usuarios = await UsuarioModel.find();
        res.json(usuarios);
    } catch (error) {
        res.status(400).json({
            'message': 'Erro ao obter usuários',
            'error': error.message
        });
    }
};

exports.obterPorEmail = async (req, res) => {
    try {
        const usuario = await UsuarioModel.findOne({ email: req.params.email });
        if (!usuario) return res.status(404).json({ error: 'Usuário não encontrado' });
        return res.json(usuario);
    } catch (error) {
        return res.status(400).json({ error: 'Erro ao buscar usuário' });
    }
};

exports.obterPorId = async (req, res) => {
    const id = req.params.id;
    try {
        const usuario = await UsuarioModel.findById(id);
        if (!usuario) {
            return res.status(404).json(
                { 'message': 'Usuário não encontrado' }
            );
        }
        res.json(usuario);
    } catch (error) {
        res.status(400).json({
            'message': 'Erro ao obter usuário',
            'error': error.message
        });
    };
};

exports.atualizar = async (req, res) => {
    const id = req.params.id;
    const usuario = req.body;
    try {
        const resultado = await UsuarioModel.findByIdAndUpdate(id, usuario);
        if (!resultado) {
            return res.status(404).json(
                { 'message': 'Usuário não encontrado' }
            );
        }
        res.json({ 'message': 'Usuário atualizado com sucesso' });
    }
    catch (error) {
        res.status(400).json({
            'message': 'Erro ao atualizar usuário',
            'error': error.message
        });
    }
};

exports.excluir = async (req, res) => {
    const id = req.params.id;
    try {
        const resultado = await UsuarioModel.findByIdAndDelete(id);
        if (!resultado) {
            return res.status(404).json(
                { 'message': 'Usuário não encontrado' }
            );
        }
        res.json({ 'message': 'Usuário excluído com sucesso' });
    } catch (error) {
        res.status(400).json({
            'message': 'Erro ao excluir usuário',
            'error': error.message
        });
    }
};

// Mantido para compatibilidade retroativa (alias de excluir)
exports.deletar = exports.excluir;