const db = require('../config/db');

const User = {
  // Criar novo usuário
  createUser: (userData, callback) => {
    const query = 'INSERT INTO users (nome, email, senha) VALUES (?, ?, ?)';
    const { nome, email, senha } = userData;

    db.query(query, [nome, email, senha], (err, result) => {
      if (err) {
        console.error('Erro ao criar usuário:', err);
        callback(err, null);
      } else {
        console.log('Usuário criado com sucesso');
        callback(null, result);
      }
    });
  },

  // Buscar usuário por email para login
  getUserByEmail: (email, callback) => {
    const query = 'SELECT * FROM users WHERE email = ?';

    db.query(query, [email], (err, result) => {
      if (err) {
        console.error('Erro ao buscar usuário por email:', err);
        callback(err, null);
      } else {
        callback(null, result[0]);
      }
    });
  },

  // Atualizar informações do usuário (alterar cadastro)
  updateUser: (id, userData, callback) => {
    const query = 'UPDATE users SET nome = ?, email = ?, senha = ? WHERE id = ?';
    const { nome, email, senha } = userData;

    db.query(query, [nome, email, senha, id], (err, result) => {
      if (err) {
        console.error('Erro ao atualizar usuário:', err);
        callback(err, null);
      } else {
        console.log('Usuário atualizado com sucesso');
        callback(null, result);
      }
    });
  },

  // Deletar usuário
  deleteUser: (id, callback) => {
    const query = 'DELETE FROM users WHERE id = ?';

    db.query(query, [id], (err, result) => {
      if (err) {
        console.error('Erro ao deletar usuário:', err);
        callback(err, null);
      } else {
        console.log('Usuário deletado com sucesso');
        callback(null, result);
      }
    });
  }
};

module.exports = User;
