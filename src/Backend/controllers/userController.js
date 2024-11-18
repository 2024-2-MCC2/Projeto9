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

// para facilitar as pessoas poderem entender onde erraram no processo coloquei os mesmos erros do que nas páginas principais 

// "erro 500 é uma mensagem genérica que indica que o servidor encontrou uma condição inesperada e não foi capaz de atender à solicitação."
// "erro 404 é um código de status HTTP que indica que o servidor não conseguiu encontrar a página solicitada", neste caso nao acho o usuario.
// "erro 401" ocorre quando você tenta acessar uma página que requer credenciais de autenticação válidas, mas as atuais não são reconhecidas ou estão ausentes", neste caso as credencias nao batem com o cadastro.
// "cod 200 é a resposta de status de sucesso que indica que a requisição foi bem sucedida"