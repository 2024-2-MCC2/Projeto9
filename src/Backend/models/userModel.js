const db = require('../config/db');

const User = {
  // Criar novo usuário
  createUser: (userData, callback) => {
    const query = 'INSERT INTO users (nome, email, senha, chave_secreta) VALUES (?, ?, ?, ?)';
    const { nome, email, senha, chave_secreta } = userData;

    console.log('Criando usuário com dados:', userData); // Log para verificar os dados

    // Verificar se chave secreta está presente e tem pelo menos 8 caracteres
    if (!chave_secreta || chave_secreta.length < 8) {
      return callback(new Error('A chave secreta deve ter pelo menos 8 caracteres.'), null);
    }

    db.query(query, [nome, email, senha, chave_secreta], (err, result) => {
      if (err) {
        console.error('Erro ao criar usuário:', err);
        callback(err, null);
      } else {
        console.log('Usuário criado com sucesso:', result);
        callback(null, result);
      }
    });
  },

  // Buscar usuário por email para login
  getUserByEmail: (email, callback) => {
    const query = 'SELECT * FROM users WHERE email = ?';

    console.log('Buscando usuário pelo email:', email); // Log para verificar o email sendo buscado

    db.query(query, [email], (err, result) => {
      if (err) {
        console.error('Erro ao buscar usuário por email:', err);
        callback(err, null);
      } else {
        if (result.length === 0) {
          return callback(new Error('Usuário não encontrado'), null);
        }
        callback(null, result[0]);
      }
    });
  },

  // Atualizar informações do usuário (alterar cadastro)
  updateUser: (id, userData, callback) => {
    const { nome, email, senha, chave_secreta } = userData;

    console.log(`Atualizando usuário com ID: ${id} e dados:`, userData); // Log para verificar os dados

    // Verificar se chave secreta está presente e tem pelo menos 8 caracteres
    if (!chave_secreta || chave_secreta.length < 8) {
      return callback(new Error('A chave secreta deve ter pelo menos 8 caracteres.'), null);
    }

    const query = 'UPDATE users SET nome = ?, email = ?, senha = ? WHERE id = ?';
    db.query(query, [nome, email, senha, id], (err, result) => {
      if (err) {
        console.error('Erro ao atualizar usuário:', err);
        callback(err, null);
      } else {
        console.log('Usuário atualizado com sucesso:', result);
        callback(null, result);
      }
    });
  },

  // Deletar usuário
  deleteUser: (id, chave_secreta, callback) => {
    // Verificar se a chave secreta está correta antes de permitir a exclusão
    const verificarChaveQuery = 'SELECT * FROM users WHERE id = ? AND chave_secreta = ?';
    console.log('Verificando chave secreta para excluir usuário com ID:', id); // Log para verificar a chave secreta

    db.query(verificarChaveQuery, [id, chave_secreta], (err, result) => {
      if (err || result.length === 0) {
        console.error('Chave secreta inválida ou não autorizada.');
        return callback(new Error('Chave secreta inválida ou não autorizada.'), null);
      }

      const deleteQuery = 'DELETE FROM users WHERE id = ?';
      db.query(deleteQuery, [id], (err, result) => {
        if (err) {
          console.error('Erro ao deletar usuário:', err);
          callback(err, null);
        } else {
          console.log('Usuário deletado com sucesso:', result);
          callback(null, result);
        }
      });
    });
  }
};

module.exports = User;
