const User = require('../models/userModel');

// Criar novo usuário
exports.createUser = (req, res) => {
  const { nome, email, senha, chave_secreta } = req.body;

  if (!nome || !email || !senha || !chave_secreta) {
    return res.status(400).json({ error: 'Todos os campos (nome, email, senha e chave secreta) são obrigatórios.' });
  }

  if (chave_secreta.length < 8) {
    return res.status(400).json({ error: 'A chave secreta deve ter pelo menos 8 caracteres.' });
  }

  User.createUser({ nome, email, senha, chave_secreta }, (err, result) => {
    if (err) {
      console.error('Erro ao criar usuário:', err);
      return res.status(500).json({ error: 'Erro interno ao criar usuário' });
    }
    res.status(201).json({ message: 'Usuário criado com sucesso', userId: result.insertId });
  });
};

// Buscar usuário por email (para login)
exports.getUserByEmail = (req, res) => {
  const { email, senha, chave_secreta } = req.body;

  if (!email || !senha || !chave_secreta) {
    return res.status(400).json({ error: 'Email, senha e chave secreta são obrigatórios!' });
  }

  User.getUserByEmail(email, (err, user) => {
    if (err) {
      console.error('Erro ao buscar usuário:', err);
      return res.status(500).json({ error: 'Erro ao buscar usuário' });
    }
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    // Verificar senha
    if (user.senha !== senha) {
      return res.status(401).json({ error: 'Senha incorreta' });
    }

    // Verificar chave secreta
    if (user.chave_secreta !== chave_secreta) {
      return res.status(401).json({ error: 'Chave secreta incorreta' });
    }

    res.status(200).json(user);
  });
};

// Atualizar usuário
exports.updateUser = (req, res) => {
  const { id } = req.params;
  const { nome, email, senha, chave_secreta } = req.body;

  if (!chave_secreta) {
    return res.status(400).json({ error: 'A chave secreta é obrigatória para atualizar os dados.' });
  }

  User.findByChaveSecreta(chave_secreta, (err, user) => {
    if (err || !user || user.id !== parseInt(id)) {
      console.error('Chave secreta inválida ou não autorizada.');
      return res.status(401).json({ error: 'Chave secreta inválida ou não autorizada.' });
    }

    const fields = {};

    if (nome && typeof nome === 'string') fields.nome = nome.trim();
    if (email && typeof email === 'string') fields.email = email.trim();
    if (senha && typeof senha === 'string') fields.senha = senha.trim();

    if (Object.keys(fields).length === 0) {
      return res.status(400).json({ error: 'Nenhum campo válido para atualizar.' });
    }

    User.updateUser(id, fields, (err, result) => {
      if (err) {
        console.error('Erro ao atualizar usuário:', err);
        return res.status(500).json({ error: 'Erro ao atualizar usuário' });
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Usuário não encontrado.' });
      }

      res.status(200).json({ message: 'Usuário atualizado com sucesso!' });
    });
  });
};

// Deletar usuário
exports.deleteUser = (req, res) => {
  const { id } = req.params;
  const { chave_secreta } = req.body;

  if (!chave_secreta) {
    return res.status(400).json({ error: 'A chave secreta é obrigatória para deletar o usuário.' });
  }

  User.findByChaveSecreta(chave_secreta, (err, user) => {
    if (err || !user || user.id !== parseInt(id)) {
      console.error('Chave secreta inválida ou não autorizada.');
      return res.status(401).json({ error: 'Chave secreta inválida ou não autorizada.' });
    }

    User.deleteUser(id, (err, result) => {
      if (err) {
        console.error('Erro ao deletar usuário:', err);
        return res.status(500).json({ error: 'Erro ao deletar usuário' });
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Usuário não encontrado.' });
      }

      res.status(200).json({ message: 'Usuário deletado com sucesso!' });
    });
  });
};



// para facilitar as pessoas poderem entender onde erraram no processo coloquei os mesmos erros do que nas páginas principais 

// "erro 500 é uma mensagem genérica que indica que o servidor encontrou uma condição inesperada e não foi capaz de atender à solicitação."
// "erro 404 é um código de status HTTP que indica que o servidor não conseguiu encontrar a página solicitada", neste caso nao acho o usuario.
// "erro 401" ocorre quando você tenta acessar uma página que requer credenciais de autenticação válidas, mas as atuais não são reconhecidas ou estão ausentes", neste caso as credencias nao batem com o cadastro.
// "cod 200 é a resposta de status de sucesso que indica que a requisição foi bem sucedida"