const User = require('../models/userModel');

// Criar novo usuário
exports.createUser = (req, res) => {
  const { nome, email, senha } = req.body;

  User.createUser({ nome, email, senha }, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Erro ao criar usuário' });
    }
    res.status(201).json({ message: 'Usuário criado com sucesso', userId: result.insertId });
  });
};

// Buscar usuário por email (para login)
exports.getUserByEmail = (req, res) => {
  const { email } = req.body;

  User.getUserByEmail(email, (err, user) => {
    if (err) {
      return res.status(500).json({ error: 'Erro ao buscar usuário' });
    }
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    res.status(200).json(user);
  });
};

// Atualizar usuário
exports.updateUser = (req, res) => {
  const { id } = req.params;
  const { nome, email, senha } = req.body;

  User.updateUser(id, { nome, email, senha }, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Erro ao atualizar usuário' });
    }
    res.status(200).json({ message: 'Usuário atualizado com sucesso' });
  });
};

// Deletar usuário
exports.deleteUser = (req, res) => {
  const { id } = req.params;

  User.deleteUser(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Erro ao deletar usuário' });
    }
    res.status(200).json({ message: 'Usuário deletado com sucesso' });
  });
};
