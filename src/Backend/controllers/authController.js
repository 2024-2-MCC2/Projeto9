const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const dotenv = require('dotenv');

dotenv.config();

exports.register = (req, res) => {
  const { nome, email, senha } = req.body;
  const hashedPassword = bcrypt.hashSync(senha, 8);

  User.create({ nome, email, senha: hashedPassword }, (err, result) => {
    if (err) return res.status(500).send('Erro ao registrar o usuário');
    res.status(201).send('Usuário registrado com sucesso');
  });
};

exports.login = (req, res) => {
  const { email, senha } = req.body;

  User.findByEmail(email, (err, results) => {
    if (err || results.length === 0) return res.status(404).send('Usuário não encontrado');

    const user = results[0];
    const passwordIsValid = bcrypt.compareSync(senha, user.senha);

    if (!passwordIsValid) return res.status(401).send('Senha incorreta');

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: 86400 });
    res.status(200).send({ auth: true, token });
  });
};


// para facilitar as pessoas poderem entender onde erraram no processo coloquei os mesmos erros do que nas páginas principais 

// "erro 500 é uma mensagem genérica que indica que o servidor encontrou uma condição inesperada e não foi capaz de atender à solicitação."
// "erro 404 é um código de status HTTP que indica que o servidor não conseguiu encontrar a página solicitada", neste caso nao acho o usuario.
// "erro 401" ocorre quando você tenta acessar uma página que requer credenciais de autenticação válidas, mas as atuais não são reconhecidas ou estão ausentes", neste caso as credencias nao batem com o cadastro.
// "cod 200 é a resposta de status de sucesso que indica que a requisição foi bem sucedida"